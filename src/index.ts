import { IPluginContext } from '@tarojs/service';
import { readConfig } from "@tarojs/helper";
import rollup, {OutputOptions} from 'rollup';
import jsx from 'rollup-plugin-jsx'
import less from "rollup-plugin-less";
import path from "path";

const inputOptions = {
  external: id => /react|@tarojs/.test(id),
  plugins: [
    less({
      insert: true,
    }),
    jsx( {factory: 'React.createElement'} ),
  ],
};
const outputOptions: OutputOptions = {
  dir: 'es',
  format: 'esm',
};

const build = async (input) => {
  const bundle = await rollup.rollup({
    ...inputOptions,
    input
  });

  const { output } = await bundle.generate(outputOptions);
  console.log('=======output===========', output);

  await bundle.write(outputOptions);
}

export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'h5-native-component',
    useConfigName: 'h5',
    async fn({config}) {
      // [ 'components/Button/index', 'components/KeyAreas/index' ]
      const componentsList = readConfig(path.resolve(process.cwd(), 'src/app.config.ts')).components;
      const input = {};
      componentsList.forEach(comp => {
        const folderList = comp.split('/');
        const componentName = `${folderList[folderList.length - 2]}/index`;
        input[componentName] = path.resolve('src/', `${componentsList[0]}.tsx`);
      })
      console.log('=======dddd===========', __dirname, process.cwd(), input);

      build(input);
    }
  })
}


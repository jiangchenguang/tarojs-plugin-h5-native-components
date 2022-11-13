import { IPluginContext } from '@tarojs/service';
// import { readConfig } from "@tarojs/helper";
import rollup, {OutputOptions} from 'rollup';
import jsx from 'rollup-plugin-jsx'
import less from "rollup-plugin-less";

const inputOptions = {
  input: 'src/components/Button/index.tsx',
  external: id => /react|@tarojs/.test(id),
  plugins: [
    jsx( {factory: 'React.createElement'} ),
    less({
      insert: true,
      output: 'es/Button/index.css'
    }),
  ],
};
const outputOptions: OutputOptions = {
  dir: 'es',
  format: 'esm'
};

async function build () {
  const bundle = await rollup.rollup(inputOptions);

  const { output } = await bundle.generate(outputOptions);
  console.log('=======output===========', output);

  await bundle.write(outputOptions);
}

export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'h5-native-component',
    useConfigName: 'h5',
    async fn({config}) {
      console.log('=======dddd===========', __dirname, process.cwd());
      // todo 如何才能调用tsc进行编译呢？tsc不能对一个特定的文件夹使用另外的tsconfig.json来编译，同时taro项目可能是使用ts编写的，那么我只能使用命令行参数的方式了？
      // build();
    }
  })
}


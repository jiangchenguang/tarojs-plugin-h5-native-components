import { IPluginContext } from '@tarojs/service';
import { readConfig } from "@tarojs/helper";
import path from "path";
import compile from './compile';

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

      await compile(input);
    }
  })
}

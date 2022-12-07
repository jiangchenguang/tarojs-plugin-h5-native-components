import { IPluginContext } from '@tarojs/service';
import compile from './compile';

export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'h5-native-component',
    useConfigName: 'h5',
    async fn({config}) {
      await compile();
    }
  })
}

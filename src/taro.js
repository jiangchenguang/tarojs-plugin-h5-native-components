import { readConfig } from "@tarojs/helper";
import path from 'path';

// 配置文件中的组件路径转换成绝对路径
export const configPathToAbsPath = (configPath) => {
  // taro配置的组件路径是忽略src的，且没有扩展类型
  // todo taro组件路径是不带扩展名的，但是rollup的input是需要的，如何处理呢？
  // [ 'components/Button/index', 'components/KeyAreas/index' ]
  return path.resolve(process.cwd(), 'src/', configPath);
}

// 获取组件的所有祖先目录
export const getFolders = (configPath) => {
  const idx = configPath.lastIndexOf('/');
  if (idx > -1) {
    return configPath.slice(0, idx);
  } else {
    return '';
  }
}

export const readComponentsConfig = () => {
  return readConfig(path.resolve(process.cwd(), 'src/app.config.ts')).components;
}

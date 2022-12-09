import { readConfig } from "@tarojs/helper";
import path from 'path';
import fs from 'fs';

export const isUseTs = (packageJson) => {
  const templateInfo = JSON.parse(packageJson).templateInfo;
  if (templateInfo && 'typescript' in templateInfo) {
    return templateInfo['typescript'];
  } else {
    throw new Error('package.json中未找到templateInfo，所以不能判断判断文件扩展名是tsx或jsx')
  }
};

// 配置文件中的组件路径转换成绝对路径
export const configPathToAbsPath = (componentConfig) => {
  // taro配置的组件路径是忽略src的，且没有扩展类型，例如：
  // [ 'components/Button/index', 'components/KeyAreas/index' ]
  let fileName;
  let filePath = '';
  const fileExt = isUseTs(fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf8')) ? '.tsx' : '.jsx';
  const idx = componentConfig.lastIndexOf('/');
  if (idx > -1) {
    fileName = componentConfig.slice(idx + '/'.length) + fileExt;
    filePath = componentConfig.slice(0, idx);
  } else {
    fileName = componentConfig + fileExt;
  }
  return path.resolve(process.cwd(), 'src/', filePath, fileName);
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

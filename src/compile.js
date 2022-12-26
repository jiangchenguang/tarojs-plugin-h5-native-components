import path from "path";
import { configPathToAbsPath, getFolders, readComponentsConfig, isUseTs } from "./taro";
import execRollup from "./rollup";

// 计算组件的输出目录
// components/Button/index => dist/es/components/Button
const calcOutputDir = (compPath) => {
  const defaultOutput = 'dist/es';
  const parentFolder = getFolders(compPath);
  return path.join(defaultOutput, parentFolder);
}

const compileOneComp = async (configPath, config)  => {
  const absPath = configPathToAbsPath(configPath);
  const outputDir = calcOutputDir(configPath);
  await execRollup(absPath, outputDir, config);
}

const compile = async () => {
  const config = {useTs: isUseTs()};
  for (const componentPath of readComponentsConfig()) {
    await compileOneComp(componentPath, config)
  }
}

export default compile;
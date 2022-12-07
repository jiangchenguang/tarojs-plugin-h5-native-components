import path from "path";
import { configPathToAbsPath, getFolders, readComponentsConfig } from "./taro";
import execRollup from "./rollup";

// 计算组件的输出目录
// components/Button/index => dist/es/components/Button
const calcOutputDir = (compPath) => {
  const defaultOutput = 'dist/es';
  const parentFolder = getFolders(compPath);
  return path.join(defaultOutput, parentFolder);
}

const compileOneComp = async (configPath)  => {
  const absPath = configPathToAbsPath(configPath);
  const outputDir = calcOutputDir(configPath);
  await execRollup(absPath, outputDir);
}

const compile = async () => {
  for (const componentPath of readComponentsConfig()) {
    await compileOneComp(componentPath)
  }
}

export default compile;
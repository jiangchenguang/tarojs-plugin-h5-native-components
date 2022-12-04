import path from "path";
const rollup = require('rollup');
const jsx = require('rollup-plugin-jsx');
// const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
// import pxToViewport from 'postcss-px-to-viewport';

const inputOptions = {
  external: id => /react|@tarojs/.test(id),
  plugins: [
    typescript(),
    jsx( {factory: 'React.createElement'} ),
  ],
};
const outputOptions = {
  format: 'es',
  preserveModules: true
};

export const compileOneComponent = async (compPath, outputDir) => {
  try {
    const bundle = await rollup.rollup({
      ...inputOptions,
      input: compPath,
    });
    const { output } = await bundle.generate({
      ...outputOptions,
      dir: outputDir,
    });
    return { bundle, output};
  } catch (e) {
    console.log('=======err===========', e);
  }
}

// 计算组件的输出目录
// 通过组件在src中componentRootDir下的目录路径，拼接到dist/es下
const calcOutputDir = (compPath, componentRootDir) => {
  const defaultOutput = 'dist/es';
  if (componentRootDir) {
    // 'component' => '/component/'
    if (componentRootDir[0] !== '/') { componentRootDir = `/${componentRootDir}`}
    if (componentRootDir[componentRootDir.length - 1] !== '/') { componentRootDir = `${componentRootDir}/`}

    const res = path.parse(compPath);
    const indexOf = res.dir.indexOf(componentRootDir);
    if (indexOf > -1) {
      const parentDir = res.dir.slice(indexOf);
      return path.join(defaultOutput, parentDir);
    } else {
      return defaultOutput;
    }
  }
}

/**
 *
 * @param input string | string[]
 * @returns {Promise<void>}
 */
const compile = async (input, componentRootDir) => {
  if (!input.push) {
    input = [input]
  }
  for (const componentPath of input) {
    const outputDir = calcOutputDir(componentPath, componentRootDir);
    const { bundle } = await compileOneComponent(componentPath, outputDir);
    await bundle.write({ ...outputOptions, dir: outputDir });
  }
}

export default compile;
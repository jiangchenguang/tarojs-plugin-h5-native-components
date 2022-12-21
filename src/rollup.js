const rollup = require('rollup');
const jsx = require('rollup-plugin-jsx');
// const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');
// import pxToViewport from 'postcss-px-to-viewport';

const inputOptions = {
  external: id => /react|@tarojs/.test(id),
  plugins: [
    // todo 如果没启用ts，则不用引入此插件
    typescript({ compilerOptions: {jsx: 'preserve'}}),
    postcss({
      extract: true,
      plugins: [],
    }),
    // todo jsx还不能放到postcss上面，会报错
    jsx( {factory: 'React.createElement'} ),
  ],
};
const outputOptions = {
  format: 'es',
  preserveModules: true,
};

/**
 * 调用rollup编译
 * @param componentPath 组件的绝对路径
 * @param outputDir  输出目录
 * @returns {Promise<void>}
 */
const execRollup = async (componentPath, outputDir) => {
  const bundle = await rollup.rollup({...inputOptions, input: componentPath});
  await bundle.generate({...outputOptions, dir: outputDir});
  await bundle.write({ ...outputOptions, dir: outputDir });
}

export default execRollup;

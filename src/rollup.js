const rollup = require('rollup');
const jsx = require('rollup-plugin-jsx');
// const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');
// import pxToViewport from 'postcss-px-to-viewport';

const getInputOptions = (config) => ({
  external: id => /react|@tarojs/.test(id),
  plugins: [
    // todo 如果没启用ts，则不用引入此插件
    config.useTs && typescript({ compilerOptions: {jsx: 'preserve'}}),
    postcss({
      extract: true,
      plugins: [],
    }),
    // todo jsx还不能放到postcss上面，会报错
    jsx( {factory: 'React.createElement'} ),
  ],
})
const outputOptions = {
  format: 'es',
  preserveModules: true,
};

/**
 * 调用rollup编译
 * @param componentPath 组件的绝对路径
 * @param outputDir  输出目录
 * @param config  编辑配置
 * @returns {Promise<void>}
 */
const execRollup = async (componentPath, outputDir, config) => {
  const bundle = await rollup.rollup({...getInputOptions(config), input: componentPath});
  await bundle.generate({...outputOptions, dir: outputDir});
  await bundle.write({ ...outputOptions, dir: outputDir });
  await bundle.close();
}

export default execRollup;

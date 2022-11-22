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
  dir: 'es',
  format: 'es',
};

export const compileOneComponent = async (compName, compPath) => {
  try {
    const bundle = await rollup.rollup({
      ...inputOptions,
      input: {[compName]: compPath}
    });
    const { output } = await bundle.generate(outputOptions);
    return { bundle, output};
  } catch (e) {
    console.log('=======err===========', e);
  }
}

const compile = async (input) => {
  for (const key of Object.keys(input)) {
    const { bundle } = await compileOneComponent(key, input[key]);
    await bundle.write(outputOptions);
  }
}

export default compile;
import rollup from 'rollup';
import jsx from 'rollup-plugin-jsx'
import postcss from "rollup-plugin-postcss";
import pxToViewport from 'postcss-px-to-viewport';
import exp from "constants";

const inputOptions = {
  external: id => /react|@tarojs/.test(id),
  plugins: [
    postcss({
      plugins: [
        pxToViewport({
          unitToConvert: 'px',
          viewportWidth: 375,
          propList: ['*'],
          viewportUnit: 'vw',
          minPixelVale: 1,
          replace: true,
          mediaQuery: false,
          exclude: /node_modules/i
        }),
      ]
    }),
    jsx( {factory: 'React.createElement'} ),
  ],
};
const outputOptions = {
  dir: 'es',
  format: 'esm',
};

export const compileOneComponent = async (compName, compPath) => {
  const bundle = await rollup.rollup({
    ...inputOptions,
    input: {compName: compPath}
  });

  const { output } = await bundle.generate(outputOptions);
  return { bundle, output};
}

const compile = async (input) => {
  for (const key of Object.keys(input)) {
    const { bundle } = await compileOneComponent(key, input[key]);
    await bundle.write(outputOptions);
  }
}

export default compile;
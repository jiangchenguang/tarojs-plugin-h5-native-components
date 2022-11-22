import path from 'path';
import assert from 'assert';
import { compileOneComponent } from '../src/compile.js';


describe('compileOneComponent', function() {
  it('可以编译最简单的tsx组件', async function() {
    const { output } = await compileOneComponent('demo', path.resolve(__dirname, './component/simpleTsxComponent.tsx'));
  });
  it('可以编译最简单的jsx组件', async function() {
    const { output } = await compileOneComponent('demo', path.resolve(__dirname, './component/simpleJsxComponent.jsx'));
  });
});
import path from 'path';
import compile, { compileOneComponent } from '../src/compile.js';


describe('compileOneComponent', function() {
  it('编译最简单的tsx组件', async function() {
    // const { output } = await compileOneComponent(path.resolve(__dirname, './component/simpleComponent/simpleComponent.tsx'), '/component/');
    await compile(path.resolve(__dirname, './component/simpleComponent/simpleComponent.tsx'), 'component');
  });
  it('编译最简单的jsx组件', async function() {
    // const { output } = await compileOneComponent(path.resolve(__dirname, './component/simpleComponent-1/simpleComponent.jsx'));
    await compile(path.resolve(__dirname, './component/simpleComponent-1/simpleComponent.jsx'), 'component');
  });
  xit('可以编译css')
  xit('可以编译less')
  xit('可以编译scss')
  it('编译带子组件的tsx组件', async function() {
    // const { output } = await compileOneComponent(
    //   path.resolve(__dirname, './component/useChildComponent/useChildComponent.tsx'),
    //   );
    await compile(path.resolve(__dirname, './component/useChildComponent/useChildComponent.tsx'), 'component');
  });
  it('编译带子组件的jsx组件', async function() {
    // const { output } = await compileOneComponent(path.resolve(__dirname, './component/useChildComponent-1/useChildComponent.jsx'));
    await compile(path.resolve(__dirname, './component/useChildComponent-1/useChildComponent.jsx'), 'component');
  });
  xit('可以给子组件传递prop')
  xit('子组件可以响应prop的变化')
  xit('编译带子组件还可以带子组件')
  xit('编译的子组件不要打包到一个文件中？')
});
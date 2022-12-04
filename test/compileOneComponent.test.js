import path from 'path';
import compile, { compileOneComponent } from '../src/compile.js';


describe('compileOneComponent', function() {
  it('编译最简单的tsx组件', function() {
    return new Promise( async (resolve, reject) => {
      await compile(path.resolve(__dirname, './component/simpleComponent/simpleComponent.tsx'), 'component');
      resolve();
    })
  });
  it('编译最简单的jsx组件', function() {
    return new Promise(async resolve => {
      await compile(path.resolve(__dirname, './component/simpleComponent-1/simpleComponent.jsx'), 'component');
      resolve();
    })
  });
  xit('可以编译css')
  xit('可以编译less')
  xit('可以编译scss')
  it('编译带子组件的tsx组件', function() {
    return new Promise(async resolve => {
      await compile(path.resolve(__dirname, './component/useChildComponent/useChildComponent.tsx'), 'component');
      resolve();
    })
  });
  it('编译带子组件的jsx组件', function() {
    return new Promise(async resolve => {
      await compile(path.resolve(__dirname, './component/useChildComponent-1/useChildComponent.jsx'), 'component');
      resolve();
    })
  });
  xit('可以给子组件传递prop')
  xit('子组件可以响应prop的变化')
  xit('编译带子组件还可以带子组件')
  xit('编译的子组件不要打包到一个文件中？')
});
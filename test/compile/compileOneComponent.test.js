import execRollup from "../../src/rollup";
import { absCompPath, outputPath} from "./helper";


describe('compileOneComponent', function() {
  it('简单的tsx组件', function() {
    return new Promise( async resolve => {
      const comp = './component/simpleComponent/simpleComponent.tsx';
      await execRollup(absCompPath(comp), outputPath(comp));
      resolve();
    })
  });
  it('简单的jsx组件', function() {
    return new Promise(async resolve => {
      const comp = './component/simpleComponent-1/simpleComponent.jsx';
      await execRollup(absCompPath(comp), outputPath(comp));
      resolve();
    })
  });
  it('jsx组件可以引用js ts文件', function() {
    return new Promise(async resolve => {
      const comp = './component/simpleComponent-2/simpleComponent.jsx';
      await execRollup(absCompPath(comp), outputPath(comp));
      resolve();
    })
  });
  it('tsx组件可以引用js ts文件', function() {
    return new Promise(async resolve => {
      const comp = './component/simpleComponent-3/simpleComponent.tsx';
      await execRollup(absCompPath(comp), outputPath(comp));
      resolve();
    })
  });
  xit('可以编译css')
  xit('可以编译less')
  xit('可以编译scss')
  it('编译带子组件的tsx组件', function() {
    return new Promise(async resolve => {
      const comp = './component/useChildComponent/useChildComponent.tsx';
      await execRollup(absCompPath(comp), outputPath(comp));
      resolve();
    })
  });
  it('编译带子组件的jsx组件', function() {
    return new Promise(async resolve => {
      const comp = './component/useChildComponent-1/useChildComponent.jsx';
      await execRollup(absCompPath(comp), outputPath(comp));
      resolve();
    })
  });
  xit('可以给子组件传递prop')
  xit('子组件可以响应prop的变化')
  xit('编译带子组件还可以带子组件')
  xit('编译的子组件不要打包到一个文件中？')
});
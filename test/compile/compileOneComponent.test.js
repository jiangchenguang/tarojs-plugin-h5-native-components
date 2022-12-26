import execRollup from "../../src/rollup";
import { absCompPath, outputPath, asyncRunner} from "./helper";


describe('compileOneComponent', function() {
  it('简单的tsx组件', function() {
    return asyncRunner( async () => {
      const comp = './component/simpleComponent/simpleComponent.tsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: true});
    })
  });
  it('简单的jsx组件', function() {
    return asyncRunner(async () => {
      const comp = './component/simpleComponent-1/simpleComponent.jsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: false});
    })
  });
  it('jsx组件可以引用js文件', function() {
    return asyncRunner(async () => {
      const comp = './component/simpleComponent-2/simpleComponent.jsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: false});
    })
  });
  it('tsx组件可以引用js ts文件', function() {
    return asyncRunner(async () => {
      const comp = './component/simpleComponent-3/simpleComponent.tsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: true});
    })
  });
  it('tsx文件可以引入css', function () {
    return asyncRunner(async () => {
      const comp = './component/simple-component-with-css/simpleComponent.tsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: true});
    })
  })
  it('jsx文件可以引入css', function () {
    return asyncRunner(async () => {
      const comp = './component/simple-component-with-css-2/simpleComponent.jsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: false});
    })
  })
  it('tsx文件可以引入less', function () {
    return asyncRunner(async () => {
      const comp = './component/simple-component-with-less/simpleComponent.tsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: true});
    })
  })
  it('jsx文件可以引入less', function () {
    return new asyncRunner(async () => {
      const comp = './component/simple-component-with-less-2/simpleComponent.jsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: false});
    })
  })
  it('tsx文件可以引入stylus', function () {
    return asyncRunner(async () => {
      const comp = './component/simple-component-with-stylus/simpleComponent.tsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: true});
    })
  })
  it('jsx文件可以引入stylus', function () {
    return asyncRunner(async () => {
      const comp = './component/simple-component-with-stylus-2/simpleComponent.jsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: false});
    })
  })
  it('tsx文件可以引入sass', function () {
    return asyncRunner(async () => {
      const comp = './component/simple-component-with-sass/simpleComponent.tsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: true});
    })
  })
  it('jsx文件可以引入sass', function () {
    return asyncRunner(async () => {
      const comp = './component/simple-component-with-sass-2/simpleComponent.jsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: false});
    })
  })
  it('编译带子组件的tsx组件', function() {
    return asyncRunner(async () => {
      const comp = './component/useChildComponent/useChildComponent.tsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: true});
    })
  });
  it('编译带子组件的jsx组件', function() {
    return asyncRunner(async () => {
      const comp = './component/useChildComponent-1/useChildComponent.jsx';
      await execRollup(absCompPath(comp), outputPath(comp), {useTs: false});
    })
  });
  xit('可以给子组件传递prop')
  xit('子组件可以响应prop的变化')
  xit('编译带子组件还可以带子组件')
  xit('编译的子组件不要打包到一个文件中？')
});
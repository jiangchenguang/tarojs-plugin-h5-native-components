import { IPluginContext } from '@tarojs/service';
import { readConfig } from "@tarojs/helper";
import * as path from 'path'
import fs from 'fs';

export default (ctx: IPluginContext) => {
  const {paths, platforms, helper, runOpts} = ctx
  const {appPath, outputPath, sourcePath, configPath} = paths
  // const appConfigFilePath = resolveScriptPath(path.join(sourcePath, `${helper.ENTRY}.config`))
  // const appConfig = helper.readConfig(appConfigFilePath)
  console.log('=======ctx===========', ctx)
  if (ctx.platforms.has('h5')) {
    ctx.modifyWebpackChain((args) => {
      const chain = args.chain;
      // console.log('=======before modify===========', chain.toConfig());
      modifyEntry(chain);
      // modifyMode(chain);
      modifyOutput(chain)
      modifyPerformance(chain)
      modifyPlugins(chain);
      removeResolve(chain);
      modifyModule(chain);
      removeOptimization(chain);
      modifyExternals(chain);
      console.log('=======after modify===========', chain.toConfig());
    })

  }
}

function modifyEntry(chain) {
  // 删除旧配置
  chain.entryPoints.clear();
  // 需要拿到app.config.json，找到components
  const appConfigJsFile = path.join(process.cwd(), './src', 'app.config.js');
  const appConfigTsFile = path.join(process.cwd(), './src', 'app.config.ts');
  const appConfig = fs.existsSync(appConfigJsFile) ? appConfigJsFile
    : fs.existsSync(appConfigTsFile) ? appConfigTsFile : null;
  if (appConfig) {
    const config = readConfig(appConfig)
    const components = config.components;
    components.forEach(compPath => {
      const fullPath = `${compPath}.tsx`; // 添加文件格式
      const dirs = fullPath.split('/');
      const compName = dirs[dirs.length - 2]; // 取文件夹名作为组件名，最后一个是index.jsx
      chain.entry(compName).add(`./src/${fullPath}`).end();
      console.log('=======xxx===========', compName, `./src/${fullPath}`);
    })
    // 使用components数据拼接entry对象
  } else {
    console.log('=======nnnnnn===========', );
  }
}

function modifyMode(chain) {
  chain.mode('development');
}

function modifyOutput(chain) {
  chain.output.filename('[name]/index.js');
  chain.output.libraryTarget('umd');
  chain.output.globalObject('this');
  chain.output.libraryExport('default');
}


function modifyPerformance(chain) {
  // 删除旧配置
  chain.performance.clear();
}

function modifyPlugins(chain) {
  chain.plugins.delete('miniPlugin');
  chain.plugins.delete('miniSplitChunksPlugin');
  chain.plugins.delete('definePlugin');

}

function removeResolve(chain) {
  chain.resolve.alias.clear();
  chain.resolve.plugins.clear();
  chain.resolve.mainFields.clear();
  chain.resolve.extensions.clear();
}
function modifyModule(chain) {
  chain.module.rules.clear();
  chain.module.rule('babel').test(/\.(ts|tsx)$/).use('ts-loader').loader('ts-loader')
}

function removeOptimization(chain) {
  // chain.optimization.minimizers.clear();
  chain.optimization.minimize(false);
  chain.optimization.usedExports(false);

}

function modifyExternals(chain) {
  chain.externals(/^(@tarojs|react)/)
  // chain.externals(/^react/)
}

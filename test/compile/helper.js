import path from 'path';

export const absCompPath = (compPath) => {
  return path.resolve(__dirname, compPath);
}
export const outputPath = compPath => {
  const idx = compPath.lastIndexOf('/');
  if (idx > -1) {
    return path.resolve('test-output/dist/es', compPath.slice(0, idx));
  } else {
    return 'dist/es'
  }
}

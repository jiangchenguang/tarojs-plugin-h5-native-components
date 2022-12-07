import { isUseTs } from "../../src/taro";
import fs from 'fs';
import path from 'path';
import assert from 'assert';

describe('taro', function() {
  it('taro不使用ts', function() {
    const use = isUseTs(fs.readFileSync(path.resolve(__dirname, './packageWithJs/package.json'), 'utf8'));
    assert.equal(use, false);
  });

  it('taro使用ts', function() {
    const use = isUseTs(fs.readFileSync(path.resolve(__dirname, './packageWithTs/package.json'), 'utf8'));
    assert.equal(use, true);
  });
});
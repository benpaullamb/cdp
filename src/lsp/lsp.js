#!/usr/bin/env node
import { getRootPath, getPackages, removeOrg } from '../utils.js';

(() => {
  const cwd = process.cwd();

  const monoRoot = getRootPath(cwd, 'front-end');
  if (!monoRoot) {
    return console.log('Error: not in the front-end monorepo');
  }

  const packages = getPackages(monoRoot);

  const packageNames = packages.map(({ name }) => removeOrg(name));
  packageNames.sort();

  console.log('Packages: ', packageNames.join(' | '));
})();
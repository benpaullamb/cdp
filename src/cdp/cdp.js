#!/usr/bin/env node
import { getRootPath, getPackages, removeOrg } from '../utils.js';

(() => {
  const packageName = process.argv[2];

  const cwd = process.cwd();

  const monoRoot = getRootPath(cwd, 'front-end');
  if (!monoRoot) {
    return console.log('NO_ROOT');
  }

  const packages = getPackages(monoRoot);

  let targetPackage = packages.find(({ name }) => removeOrg(name) === packageName);

  if(!targetPackage) {
    targetPackage = packages.find(({ name }) => removeOrg(name).includes(packageName));
  }

  if (!targetPackage?.path) {
    return console.log('NOT_FOUND');
  }

  console.log(targetPackage.path);
})();
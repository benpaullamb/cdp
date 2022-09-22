import path from 'path';
import fs from 'fs';
import glob from 'glob';

export function getPackageName(dir) {
  const files = fs.readdirSync(dir);
  if (files.includes('package.json')) {
    const packagePath = path.resolve(dir, 'package.json');
    const packageJson = fs.readFileSync(packagePath, 'utf-8');
    return JSON.parse(packageJson).name;
  }
}

export function getRootPath(dir, rootPackageName) {
  const packageName = getPackageName(dir);
  if (packageName === rootPackageName) {
    return dir;
  }

  if (dir === 'C:\\') {
    return;
  }

  const pathUp = path.resolve(dir, '..');
  return getRootPath(pathUp, rootPackageName);
}

export function getPackages(root) {
  const packagePathPatterns = ['@(apps|packages)/*', 'apps/mfe/*', 'apps/containers/*'];
  const rootPath = root.replaceAll('\\', '/');

  const packageGlobs = packagePathPatterns.map(pattern => glob.sync(`${rootPath}/${pattern}`));
  const packagePaths = [rootPath];
  packageGlobs.forEach(glob => packagePaths.push(...glob));

  const packageNamesPaths = packagePaths.map(packagePath => ({
    path: packagePath,
    name: getPackageName(packagePath)
  }))

  return packageNamesPaths.filter(({ name }) => !!name);
}

export function removeOrg(packageName) {
  if (packageName.includes('/')) {
    return packageName.split('/')[1];
  }
  return packageName;
}
const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;
const pkg = require('../package.json');

const exec = command => execSync(command, { stdio: 'inherit' });

const BUILD_PATH = path.join(__dirname, '..', 'lib');

const getPackageJsonSource = () => `{
  "name": "${pkg.name}",
  "version": "${pkg.version}",
  "main": "${pkg.main}",
  "types": "${pkg.types}",
  "homepage": "https://icons.indiro.ru/?path=/story/icons--icons",
  "repository": {
    "type": "git",
    "url": "https://github.com/indiro71/react-icons-library"
  },
  "author": "INDIRO",
  "license": "MIT",
  "keywords": [
    "svg",
    "icons",
    "library",
    "svgr",
    "SvgComponent"
  ]
}`;

const publishLib = async () => {
  const pj = {
    filepath: 'package.json',
    source: getPackageJsonSource()
  }

  await fs.outputFile(path.join(BUILD_PATH, pj.filepath), pj.source);
  await fs.copyFile(path.join(__dirname, '..', 'README.md'), path.join(BUILD_PATH, 'README.md'));
  console.log('publish')

  exec('git status');
  exec('git add -A');
  exec('git commit -m "Add images"');
  exec('git push');
  exec(`cd ${BUILD_PATH} && npm publish --access=public`);
}

publishLib();
import fs from 'fs'
import Configstore from 'configstore';
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

export const store = new Configstore(packageJson.name, {init: true})

import fs from 'fs'
import Configstore from 'configstore';
import path from 'path'
import { fileURLToPath }  from 'url'

const dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(fs.readFileSync(path.resolve(dirname,'../package.json'), 'utf8'));

export const store = new Configstore(packageJson.name, {init: true})

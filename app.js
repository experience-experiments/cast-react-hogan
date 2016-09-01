const path = require('path')
const fs = require('fs')
/*
http://stackoverflow.com/questions/9153571/is-there-a-way-to-get-version-from-package-json-in-nodejs-code
*/
const commander = require('commander')
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))

const processCwd = process.cwd()
const serverPath = path.resolve(processCwd, 'server')

const api = require(path.join(serverPath, 'app/api'))
const react = require(path.join(serverPath, 'app/react'))
const hogan = require(path.join(serverPath, 'app/hogan'))

commander
  .version(pkg.version)
  .option('-a, --api <port>', 'The port on which to listen for the API')
  .option('-r, --react <port>', 'The port on which to listen for the React UI')
  .option('-h, --hogan <port>', 'The port on which to listen for the Hogan UI')
  .parse(process.argv)

if (commander.api) api.start(commander.api)
if (commander.react) react.start(commander.react)
if (commander.hogan) hogan.start(commander.hogan)

/*
 *	TODO:
 *  Pass API port (etc) into Axios for React. At the moment these values are hard-coded (which is bad)
 */
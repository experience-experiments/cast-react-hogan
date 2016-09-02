/* eslint promise/param-names: 0 */

require('babel-register')

const fs = require('fs')
const path = require('path')

const processCwd = process.cwd()
const serverPath = path.resolve(processCwd, 'server')

/*
http://stackoverflow.com/questions/9153571/is-there-a-way-to-get-version-from-package-json-in-nodejs-code
*/
const commander = require('commander')
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const api = require(path.join(serverPath, 'app/api'))
const react = require(path.join(serverPath, 'app/react'))
const hogan = require(path.join(serverPath, 'app/hogan'))

/*
 *  These are very limited controls
 */
commander
  .version(pkg.version)
  .option('-r, --react <port>', 'The port on which to listen for the React UI')
  .option('-h, --hogan <port>', 'The port on which to listen for the Hogan UI')
  .parse(process.argv)

/*
 *  Gulp creates the client 'config.js' file, which contains declarations used by
 *  React Promise middleware, and is bundled into the React application. The
 *  parameters for the middleware are in the '.env' file at the application folder
 *  root (alongside 'app.js'). Those declarations (and the API server itself) are
 *  prerequisites for the React application. You can change the configuration of
 *  the API server by modifying the content of that file.
 *
 *  To run Gulp and start the application with the default settings, at the command
 *  line type:
 *
 *    npm start
 *
 *  To run Gulp and start the application, and watch for changes on the file system,
 *  at the command line type:
 *
 *    npm run dev
 *
 *  UNLESS YOU ARE RUNNING IN DEV YOU PROBABLY DO NOT WANT THE DEFAULT SETTINGS.
 *
 *  What do you want to do?
 *
 *    "I want to build the application without starting the servers"
 *
 *  To build the application without starting the servers, run Gulp. At the command
 *  line type:
 *
 *    gulp start
 *
 *  What else do you want to do?
 *
 *    "I want to start the servers without building the application"
 *
 *  To start the API, at the command line type:
 *
 *    node app
 *
 *  To start both the API and the React UI, instead type:
 *
 *    node app --react [port]
 *
 *  (Where [port] is the port number for the React server)
 *
 *  To start the API and the Hogan UI, instead type:
 *
 *    node app --hogan [port]
 *
 *  (Where [port] is the port number for the Hogan server)
 *
 *  To start the API and both the React and Hogan UIs:
 *
 *    node app --react [port] --hogan [port]
 *
 *  (Where [port] is the port number for the React and Hogan servers)
 *
 *  Anything else?
 *
 *    "I want to change the configuration of the API"
 *
 *  Open the '.env' file in your preferred editor, change the declaration
 *  values, then close the file. Remember to save. Then, build and start.
 *
 */
Promise.resolve()
  .then(() => {
    api.start()
  })
  .then(() => {
    /*
     *  We might want to start the React server
     */
    if (commander.react) react.start(commander.react)
    /*
     *  We might want to start the Hogan server
     */
    if (commander.hogan) hogan.start(commander.hogan)
  })
  .catch((e) => {
    process.exit(1)
  })

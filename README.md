# iPallor

## Setup
1. Download [Node.js](https://nodejs.org/en/download/)
2. Download [Git Bash](https://git-scm.com/downloads)
3. Open up git bash and browse to the folder where you want to place iPallor
3. Run `git clone https://github.com/MedAppJamTeam14/iPallor.git`
4. `cd iPallor`
5. `npm install -g bower gulp`
6. `bower install && npm install`
7. Run `gulp` to start server

## Commands
* `gulp` - run gulp and start server
* `gulp build` - build dist version of app (concatenate + minify)
* `gulp lint` - lint with JSHint and JSCS
* `gulp test` - test with Karma and Mocha
* `gulp e2e` - test with Protractor
* `gulp bump [--major || --minor || --patch]` - bump version

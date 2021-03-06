# iPallor
  * Generated with [Bangular](https://github.com/42Zavattas/generator-bangular).
  * If you want to add routes/directives, follow the instructions [on the Bangular Readme](https://github.com/42Zavattas/generator-bangular#generators).

## Setup

### Core

1. Download [Node.js](https://nodejs.org/en/download/)
2. Download [Git Bash](https://git-scm.com/downloads)
3. Open up git bash and browse to the folder where you want to place iPallor
3. `git clone https://github.com/MedAppJamTeam14/iPallor.git`
4. `cd iPallor`
5. `npm install -g bower gulp`
6. `bower install && npm install`
7. `gulp` to start server

### Testing Environment
1. `npm install -g phantomjs`
2. `gulp e2e:update`
3. `gulp test`
4. `gulp e2e`

## Commands
  * `gulp` - run gulp and start server
  * `gulp build` - build dist version of app (concatenate + minify)
  * `gulp lint` - lint with JSHint and JSCS
  * `gulp test` - test with Karma and Mocha (unit-testing)
  * `gulp e2e` - test with Protractor (end-to-end testing)
  * `gulp bump [--major || --minor || --patch]` - bump version
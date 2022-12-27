/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-module */
const { register } = require('esbuild-register/dist/node'); // teach node about typescript then require in the rest of the app
register();
require('./src/listener');

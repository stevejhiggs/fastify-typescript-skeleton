// teach node about typescript by using esbuild then require in the rest of the app

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-module */
const { register } = require('esbuild-register/dist/node');
register();
require('./src/listener');

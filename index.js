/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-module */
require('esbuild-register/dist/node').register(); // teach node about typescript then require in the rest of the app
require('./src/listener');

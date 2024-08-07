# fastify-typescript-skeleton

This is an example of what I would consider to be a production ready node api. There are comments throughout the repo that should tell you how everything hangs together.

## Features

- Built on fastify
- Typescript throughout
- Typescript is removed from production builds
- json schemas used for automatic api request validity checking
- helmet security headers
- native node test based tests that support both unit and in-memory integration tests. Tests are also written in typescript
- automatic test coverage collection
- pre-configured linting with eslint + prettier
- logging all set up
- automatic openapi docs
- docker support baked in

## Local development

### Requirements

- Node.js 18.x (https://nodejs.org/en/)
- pnpm (https://pnpm.io/)

### Running locally

The api you can get working just by running `pnpm i` to install the package and then `pnpm start` to start the api. You can then access the api on http://localhost:3000. E.g make a GET to http://localhost:3000/health

### Other commands

- `pnpm start` - start the api running locally.
- `pnpm watch` - start the api in watch mode, changing any files will auto restart the api.
- `pnpm test:ci` - run tests
- `pnpm test` - run tests in watch mode, changing any files will auto rerun the tests.
- `pnpm lint` - run prettier and eslint and auto-fix any issues
- `pnpm lint:ci` - run prettier and eslint and report issues
- `pnpm build` - fully build the api as js and output it to the lib directory
- `pnpm start:production` - run the built app in the lib directory
- `pnpm setup-commit-hooks` - enables precommit hooks to lint and typecheck

### Environment variables

- `DISABLE_DOCS` - if set to true then the /documentation endpoint is disabled. Defaults to false
- `LOG_LEVEL` - sets the logging level. This can be debug, error, warn, info. Defaults to info.

### Running tests

All the tests are co-located with the source files and can be ran by running `pnpm test`

## Available routes

To see all the available routes load `http://localhost:3000/documentation`. This will show all routes and associated docs

## Performance

On my 2018 macbook pro a single instance can serve the endpoints at roughly 24k rps.

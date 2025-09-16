# fastify-typescript-skeleton

This is an example of what I would consider to be a production ready node api. There are comments throughout the repo that should tell you how everything hangs together.

## Features

- Built on fastify
- Typescript throughout
- Typescript is removed from production builds
- json schemas used for automatic api request validity checking
- helmet security headers
- both unit and in-memory integration tests.
- automatic test coverage collection
- pre-configured linting with biome + prettier
- logging all set up
- automatic openapi docs
- docker support baked in

## Local development

### Requirements

- pnpm (https://pnpm.io/)

(There is a pnpm version of this repo on the "pnpm" branch)

### Running locally

The api you can get working just by running `pnpm i` to install the package and then `pnpm start` to start the api. You can then access the api on http://localhost:3000. E.g make a GET to http://localhost:3000/health

### Other commands

- `pnpm run start` - start the api running locally.
- `pnpm run watch` - start the api in watch mode, changing any files will auto restart the api.
- `pnpm run test:ci` - run tests
- `pnpm run test` - run tests in watch mode, changing any files will auto rerun the tests.
- `pnpm run lint` - run prettier and eslint and auto-fix any issues
- `pnpm run lint:ci` - run prettier and eslint and report issues
- `pnpm run start:production` - run the built app in the lib directory
- `pnpm run setup-commit-hooks` - enables precommit hooks to lint and typecheck

### Environment variables

- `DISABLE_DOCS` - if set to true then the /documentation endpoint is disabled. Defaults to false
- `LOG_LEVEL` - sets the logging level. This can be debug, error, warn, info. Defaults to info.

### Running tests

All the tests are co-located with the source files and can be ran by running `pnpm run test`

## Available routes

To see all the available routes load `http://localhost:3000/documentation`. This will show all routes and associated docs

## Performance

On my mac a single instance can serve the endpoints at roughly 40k rps.

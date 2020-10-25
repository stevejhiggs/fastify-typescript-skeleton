import pino from 'pino';

// give access to an instance of the logger from anywhere that needs it.
// if you are logging as part of a request you are better off using the request level
// logger as this will ensure all the logs get the same request id
const logger = pino();
export default logger;

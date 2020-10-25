import { AddressInfo } from 'net';
import getServer from './server';
import logger from './logger';

// The listener attaches the server to a network port
// this is done seperately to the server to allow the server
// to be used within tests without needed a network connection
const start = async () => {
  try {
    const app = getServer();
    await app.listen(process.env.PORT || 3000, '::');
    app.log.info(`server listening on ${(app.server.address() as AddressInfo).port}`);
  } catch (err) {
    logger.error(err);
  }
};

start();

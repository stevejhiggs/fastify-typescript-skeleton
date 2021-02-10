import { AddressInfo } from 'net';
import getServer from './server';
import logger from './logger';

const port: string = process.env.PORT || '3000';

// The listener attaches the server to a network port
// this is done seperately to the server to allow the server
// to be used within tests without needed a network connection
const start = async () => {
  try {
    const app = getServer(port);
    await app.listen(port, '::');
    const currentAddress = app.server.address() as AddressInfo;
    app.log.info(`server listening on http://${currentAddress.address}:${currentAddress.port}`);
  } catch (error) {
    logger.error(error);
  }
};

start();

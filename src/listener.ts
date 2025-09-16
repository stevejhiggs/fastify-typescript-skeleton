import type { AddressInfo } from 'node:net';
import logger from './logger.js';
import getServer from './server.js';

const port: number = Number.parseInt(process.env.PORT || '3000');

// The listener attaches the server to a network port
// this is done seperately to the server to allow the server
// to be used within tests without needing a network connection
const start = async () => {
  try {
    const app = await getServer(port);
    await app.listen({ port, host: '::' });
    const currentAddress = app.server.address() as AddressInfo;
    app.log.info(`server listening on http://${currentAddress.address}:${currentAddress.port}`);
  } catch (error) {
    logger.error(error);
  }
};

start();

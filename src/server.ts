import fastify from 'fastify';
import helmet from 'fastify-helmet';

import registerRoutes from './routes';

export default function getServer() {
  const app = fastify({
    ignoreTrailingSlash: true,
    logger: true
  });

  app.register(helmet);
  registerRoutes(app);

  return app;
}

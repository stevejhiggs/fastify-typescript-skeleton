import fastify from 'fastify';
import helmet from 'fastify-helmet';
import fastifyOas from 'fastify-oas';

import registerRoutes from './routes';

export default function getServer() {
  const app = fastify({
    ignoreTrailingSlash: true,
    logger: true
  });

  // add security headers
  app.register(helmet);

  // adds open api documentations at /documentation
  app.register(fastifyOas, {
    swagger: {
      info: {
        title: 'My cool API',
        version: '1.0.0'
      }
    },
    exposeRoute: true
  });

  registerRoutes(app);

  return app;
}

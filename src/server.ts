import fastify from 'fastify';
import helmet from 'fastify-helmet';
import fastifyOas, { FastifyOASOptions } from 'fastify-oas';

import registerRoutes from './routes';

export default function getServer(port = '3000') {
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
        title: 'Fastify skeleton api',
        version: '1.0.0'
      },
      host: `localhost:${port}`
    },
    exposeRoute: true
  } as FastifyOASOptions);

  registerRoutes(app);

  return app;
}

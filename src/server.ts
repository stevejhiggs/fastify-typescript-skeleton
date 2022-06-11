import fastify from 'fastify';
import helmet from '@fastify/helmet';
import fastifySwagger, { SwaggerOptions } from '@fastify/swagger';
import { ajvTypeBoxPlugin, TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

import registerRoutes from './routes';
import { EnhancedFastifyInstance } from './types';

export default function getServer(port = 3000) {
  const app = fastify({
    ajv: {
      plugins: [ajvTypeBoxPlugin]
    },
    ignoreTrailingSlash: true,
    logger: {
      level: process.env.LOG_LEVEL || 'info'
    }
  }).withTypeProvider<TypeBoxTypeProvider>();

  // add security headers
  app.register(helmet);

  // adds open api documentations at /documentation
  if (process.env.DISABLE_DOCS !== 'true')
    app.register(fastifySwagger, {
      swagger: {
        info: {
          title: 'Fastify skeleton api',
          version: '1.0.0'
        },
        host: `localhost:${port}`
      },
      staticCSP: true,
      exposeRoute: true
    } as SwaggerOptions);

  registerRoutes(app as EnhancedFastifyInstance);

  return app;
}

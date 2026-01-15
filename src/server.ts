import helmet from '@fastify/helmet';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { fastify } from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';

import registerRoutes from './routes.js';

export default async function getServer(port = 3000) {
  const app = fastify({
    routerOptions: {
      ignoreTrailingSlash: true
    },
    logger: {
      level: process.env.LOG_LEVEL || 'info'
    }
  }).withTypeProvider<ZodTypeProvider>();

  // Set up Zod validators and serializers
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  // add security headers
  await app.register(helmet);

  // adds open api documentations at /documentation
  if (process.env.DISABLE_DOCS !== 'true') {
    await app.register(fastifySwagger, {
      openapi: {
        openapi: '3.1.0',
        info: {
          title: 'Fastify skeleton api',
          version: '1.0.0'
        },
        servers: [
          {
            url: `http://localhost:${port}`
          }
        ]
      },
      transform: jsonSchemaTransform
    });
    await app.register(fastifySwaggerUi, {
      routePrefix: '/documentation',
      uiConfig: {
        docExpansion: 'full',
        deepLinking: false
      },
      staticCSP: true
    });
  }

  registerRoutes(app);

  return app;
}

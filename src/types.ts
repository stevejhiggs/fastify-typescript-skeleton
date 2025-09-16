import type { IncomingMessage, Server, ServerResponse } from 'node:http';
import type { FastifyBaseLogger, FastifyInstance } from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';

export type EnhancedFastifyInstance = FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyBaseLogger, ZodTypeProvider>;

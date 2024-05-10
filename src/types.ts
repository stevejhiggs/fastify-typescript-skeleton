import type { IncomingMessage, Server, ServerResponse } from 'node:http';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import type { FastifyBaseLogger, FastifyInstance } from 'fastify';

export type EnhancedFastifyInstance = FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyBaseLogger, TypeBoxTypeProvider>;

import { Server, IncomingMessage, ServerResponse } from 'http';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { FastifyInstance, FastifyBaseLogger } from 'fastify';

export type EnhancedFastifyInstance = FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyBaseLogger, TypeBoxTypeProvider>;

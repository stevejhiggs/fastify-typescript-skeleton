import { FastifyInstance } from 'fastify';

export default function registerRoutes(app: FastifyInstance) {
  app.get('/health', async (request, reply) => {
    reply.send('OK');
  });
}

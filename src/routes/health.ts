import type { EnhancedFastifyInstance } from '../types';

export default function registerRoutes(app: EnhancedFastifyInstance) {
  app.get('/health', async (_request, reply) => {
    reply.send('OK');
  });
}

import type { EnhancedFastifyInstance } from '../types.js';

export default function registerRoutes(app: EnhancedFastifyInstance) {
  app.get('/health', async (_request, reply) => {
    reply.send('OK');
  });
}

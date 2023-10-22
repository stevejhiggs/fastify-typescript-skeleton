import { EnhancedFastifyInstance } from '../types.js';

export default function registerRoutes(app: EnhancedFastifyInstance) {
  app.get('/health', async (request, reply) => {
    reply.send('OK');
  });
}

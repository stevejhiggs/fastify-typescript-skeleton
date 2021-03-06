import { FastifyInstance } from 'fastify';
import health from './health';
import schemaTest from './schema-test';

// This is a central place to hook in all your routes
export default function registerRoutes(app: FastifyInstance) {
  health(app);
  schemaTest(app);
}

import { FastifyInstance } from 'fastify';
import health from './health';
import schemaTest from './schemaTest';

export default function registerRoutes(app: FastifyInstance) {
  health(app);
  schemaTest(app);
}

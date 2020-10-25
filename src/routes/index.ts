import { FastifyInstance } from 'fastify';
import health from './health';

export default function registerRoutes(app: FastifyInstance) {
  health(app);
}

import type { EnhancedFastifyInstance } from '../types.js';
import health from './health.js';
import schemaTest from './schema-test.js';

// This is a central place to hook in all your routes
export default function registerRoutes(app: EnhancedFastifyInstance) {
  health(app);
  schemaTest(app);
}

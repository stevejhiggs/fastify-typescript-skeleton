import health from './health/route.js';
import schemaTest from './schema-test/route.js';
import type { EnhancedFastifyInstance } from './types.js';

// This is a central place to hook in all your routes
export default function registerRoutes(app: EnhancedFastifyInstance) {
  health(app);
  schemaTest(app);
}

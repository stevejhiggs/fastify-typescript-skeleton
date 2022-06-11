import type { EnhancedFastifyInstance } from '../types';
import health from './health';
import schemaTest from './schema-test';

// This is a central place to hook in all your routes
export default function registerRoutes(app: EnhancedFastifyInstance) {
  health(app);
  schemaTest(app);
}

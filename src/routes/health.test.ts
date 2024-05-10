import assert from 'node:assert';
import { afterEach, beforeEach, describe, it } from 'node:test';

import getServer from '../server.js';
import type { EnhancedFastifyInstance } from '../types.js';

describe('endpoints -> health', () => {
  let app: EnhancedFastifyInstance;

  beforeEach(async () => {
    // allows us to spin up the server in memory
    app = await getServer();
  });

  afterEach(() => {
    // biome-ignore lint/suspicious/noEmptyBlockStatements: close requires a callback
    app.close(() => {});
  });

  describe('/health', () => {
    it('should return a 200 for a GET request', async () => {
      const result = await app.inject({
        method: 'GET',
        url: '/health'
      });

      assert.strictEqual(result.statusCode, 200);
    });

    it('should return a 404 with a POST request', async () => {
      const result = await app.inject({
        method: 'POST',
        url: '/health'
      });

      assert.strictEqual(result.statusCode, 404);
    });
  });
});

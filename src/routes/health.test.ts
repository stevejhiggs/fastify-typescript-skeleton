import { afterEach, beforeEach, describe, it } from 'node:test';
import assert from 'node:assert';

import getServer from '../server.js';
import { EnhancedFastifyInstance } from '../types.js';

describe('endpoints -> health', () => {
  let app: EnhancedFastifyInstance;

  beforeEach(async () => {
    // allows us to spin up the server in memory
    app = await getServer();
  });

  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
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

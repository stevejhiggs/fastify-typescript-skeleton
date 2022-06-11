import getServer from '../../src/server';
import { EnhancedFastifyInstance } from '../../src/types';

describe('endpoints -> health', () => {
  let app: EnhancedFastifyInstance;

  beforeEach(() => {
    // allows us to spin up the server in memory
    app = getServer();
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

      expect(result.statusCode).toBe(200);
    });

    it('should return a 404 with a POST request', async () => {
      const result = await app.inject({
        method: 'POST',
        url: '/health'
      });

      expect(result.statusCode).toBe(404);
    });
  });
});

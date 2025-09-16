import { z } from 'zod/v4';
import type { EnhancedFastifyInstance } from '../types.js';

// Zod can generate both json schema and typescript types
// the json schemas are checked at runtime, the ts schemas at compile time.
// You don't have to use all of these on each request.
// We've enabled the zod schema provider so we can just pass the zod schema
// directly in and get runtime + build time checking
const postSchema = {
  body: z.object({
    someKey: z.string().optional(),
    someOtherKey: z.number().max(999),
    arrayKey: z.array(z.number()).max(3),
    nullableKey: z.number().nullable(),
    multipleTypesKey: z.union([z.number(), z.boolean()])
  }),
  querystring: z.object({
    name: z.string(),
    excitement: z.coerce.number().int().optional()
  }),
  params: z.object({
    par1: z.string(),
    par2: z.coerce.number()
  }),
  headers: z.object({
    'x-foo': z.string()
  }),
  response: {
    200: z.object({
      par1: z.string(),
      par2: z.number(),
      queryName: z.string(),
      foo: z.string(),
      someOtherKey: z.number()
    })
  }
};

const getSchema = {
  querystring: z.object({
    date: z.iso.date(),
    excitement: z.coerce.number().int().optional()
  }),
  params: z.object({
    par1: z.string(),
    par2: z.coerce.number()
  }),
  response: {
    200: z.object({
      par1: z.string(),
      par2: z.number(),
      queryDate: z.iso.date(),
      someOtherKey: z.number()
    })
  }
};

export default function registerRoutes(app: EnhancedFastifyInstance) {
  app.post('/schema-test/post/:par1/:par2', { schema: postSchema }, async (request, reply) => {
    reply.send({
      par1: request.params.par1,
      par2: request.params.par2,
      queryName: request.query.name,
      foo: request.headers['x-foo'],
      someOtherKey: request.body.someOtherKey
    });
  });

  app.get('/schema-test/get/:par1/:par2', { schema: getSchema }, async (request, reply) => {
    reply.send({
      par1: request.params.par1,
      par2: request.params.par2,
      queryDate: request.query.date,
      someOtherKey: 100
    });
  });
}

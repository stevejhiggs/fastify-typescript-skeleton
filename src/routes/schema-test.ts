import { Type } from '@sinclair/typebox';
import type { EnhancedFastifyInstance } from '../types';

// Typebox can generate both json schema and typescript types
// the json schemas are checked at runtime, the ts schemas at compile time.
// You don't have to use all of these on each request.
// We've enabled the typebox schema provider so we can just pass the typebox schema
// directly in and get runtime + build time checking
const schema = {
  body: Type.Object({
    someKey: Type.Optional(Type.String()),
    someOtherKey: Type.Number({ maximum: 999 }),
    arrayKey: Type.Array(Type.Number(), { maxItems: 3 }),
    nullableKey: Type.Union([Type.Number(), Type.Null()]),
    multipleTypesKey: Type.Union([Type.Number(), Type.Boolean()])
  }),
  querystring: Type.Object({
    name: Type.String(),
    excitement: Type.Optional(Type.Integer())
  }),
  params: Type.Object({
    par1: Type.String(),
    par2: Type.Number()
  }),
  headers: Type.Object({
    'x-foo': Type.String()
  }),
  response: {
    200: Type.Object({
      par1: Type.String(),
      par2: Type.Number(),
      queryName: Type.String(),
      foo: Type.String(),
      someOtherKey: Type.Number()
    })
  }
};

export default function registerRoutes(app: EnhancedFastifyInstance) {
  app.post('/schema-test/:par1/:par2', { schema }, async (request, reply) => {
    reply.send({
      par1: request.params.par1,
      par2: request.params.par2,
      queryName: request.query.name,
      foo: request.headers['x-foo'],
      someOtherKey: request.body.someOtherKey
    });
  });
}

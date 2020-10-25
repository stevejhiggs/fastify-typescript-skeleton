import { FastifyInstance, FastifySchema } from 'fastify';
import { Type, Static } from '@sinclair/typebox';

// Typebox can generate both json schema and typescript types
// the json schemas are checked at runtime, the ts schemas at compile time.
// You don't have to use all of these on each request
const bodySchema = Type.Object({
  someKey: Type.Optional(Type.String()),
  someOtherKey: Type.Number({ maximum: 999 }),
  arrayKey: Type.Array(Type.Number(), { maxItems: 3 }),
  nullableKey: Type.Union([Type.Number(), Type.Null()]),
  multipleTypesKey: Type.Union([Type.Number(), Type.Boolean()])
});

const querystringSchema = Type.Object({
  name: Type.String(),
  excitement: Type.Optional(Type.Integer())
});

const paramsSchema = Type.Object({
  par1: Type.String(),
  par2: Type.Number()
});

const headersSchema = Type.Object({
  'x-foo': Type.String()
});

const responseSchema = Type.Object({
  par1: Type.String(),
  par2: Type.Number(),
  queryName: Type.String(),
  foo: Type.String(),
  someOtherKey: Type.Number()
});

const schema: FastifySchema = {
  body: bodySchema,
  querystring: querystringSchema,
  params: paramsSchema,
  headers: headersSchema
};

// The typescript types representing the above json schemas
type Body = Static<typeof bodySchema>;
type Query = Static<typeof querystringSchema>;
type Params = Static<typeof paramsSchema>;
type Headers = Static<typeof headersSchema>;
type Reply = Static<typeof responseSchema>;

export default function registerRoutes(app: FastifyInstance) {
  app.post<{
    Querystring: Query;
    Headers: Headers;
    Params: Params;
    Body: Body;
    Reply: Reply;
  }>('/schemaTest/:par1/:par2', { schema }, async (request, reply) => {
    reply.send({
      par1: request.params.par1,
      par2: request.params.par2,
      queryName: request.query.name,
      foo: request.headers['x-foo'],
      someOtherKey: request.body.someOtherKey
    });
  });
}

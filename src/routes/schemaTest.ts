import { FastifyInstance } from 'fastify';
import { Type, Static } from '@sinclair/typebox';

// The typescript type representing the below json schema
type TSBody = Static<typeof bodyJsonSchemaBox>;

const bodyJsonSchemaBox = Type.Object({
  someKey: Type.Optional(Type.String()),
  someOtherKey: Type.Number({ maximum: 999 }),
  arrayKey: Type.Array(Type.Number(), { maxItems: 3 }),
  nullableKey: Type.Union([Type.Number(), Type.Null()]),
  multipleTypesKey: Type.Union([Type.Number(), Type.Boolean()])
});

const queryStringJsonSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    excitement: { type: 'integer' }
  }
};

const paramsJsonSchema = {
  type: 'object',
  properties: {
    par1: { type: 'string' },
    par2: { type: 'number' }
  }
};

const headersJsonSchema = {
  type: 'object',
  properties: {
    'x-foo': { type: 'string' }
  },
  required: ['x-foo']
};

const schema = {
  body: bodyJsonSchemaBox,
  querystring: queryStringJsonSchema,
  params: paramsJsonSchema,
  headers: headersJsonSchema
};

export default function registerRoutes(app: FastifyInstance) {
  app.post('/schemaTest', { schema }, async (request, reply) => {
    reply.send('OK');
  });
}

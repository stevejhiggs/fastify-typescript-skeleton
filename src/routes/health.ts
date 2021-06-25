import { FastifyInstance } from 'fastify';

export default function registerRoutes(app: FastifyInstance) {
  app.get('/health', async (request, reply) => {
    //custom trace
    const {
      activeSpan,
      tracer
      // context,
      // extract,
      // inject,
    } = request.openTelemetry();

    const childSpan = tracer.startSpan(`${(activeSpan as any).name} - child process`);
    // doSomeWork()
    childSpan.end();

    reply.send('OK');
  });
}

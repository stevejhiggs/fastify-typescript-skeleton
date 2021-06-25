import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/tracing';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { NodeTracerProvider } from '@opentelemetry/node';
import { registerInstrumentations } from '@opentelemetry/instrumentation';

const provider = new NodeTracerProvider();

provider.addSpanProcessor(
  // Note: SimpleSpanProcessor should not be used in production (use BatchSpanProcessor instead).
  new SimpleSpanProcessor(new ConsoleSpanExporter())
);

provider.register();

registerInstrumentations({
  instrumentations: [new HttpInstrumentation()]
});

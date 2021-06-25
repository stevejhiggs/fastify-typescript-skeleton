import { SimpleSpanProcessor } from '@opentelemetry/tracing';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { NodeTracerProvider } from '@opentelemetry/node';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { ExporterConfig, ZipkinExporter } from '@opentelemetry/exporter-zipkin';

const provider = new NodeTracerProvider();

// Add your zipkin url (`http://localhost:9411/api/v2/spans` is used as
// default) and application name to the Zipkin options.
// You can also define your custom headers which will be added automatically.
const zipkinOptions: ExporterConfig = {
  headers: {
    'my-header': 'header-value'
  },
  url: 'http://localhost:9411/api/v2/spans',
  serviceName: 'fastify-example'
};

const exporter = new ZipkinExporter(zipkinOptions);

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

provider.register();

registerInstrumentations({
  instrumentations: [new HttpInstrumentation()]
});

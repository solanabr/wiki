/**
 * Stub declarations for npm packages missing type declarations
 * or not installed as direct dependencies.
 */

declare module '@alcalzone/ansi-tokenize' {
  export interface AnsiToken {
    type: string;
    value: string;
    style?: any;
  }
  export function tokenize(input: string): AnsiToken[];
  export default function tokenize(input: string): AnsiToken[];
}

declare module '@anthropic-ai/sandbox-runtime' {
  export interface SandboxConfig {
    [key: string]: any;
  }
  export function createSandbox(config?: SandboxConfig): any;
  export default any;
}

declare module 'jsonc-parser/lib/esm/main.js' {
  export * from 'jsonc-parser';
}

declare module 'react-reconciler/constants.js' {
  export const ContinuousEventPriority: number;
  export const DefaultEventPriority: number;
  export const DiscreteEventPriority: number;
  export const IdleEventPriority: number;
}

// OpenTelemetry exporters — optional, only used in telemetry instrumentation
declare module '@opentelemetry/exporter-trace-otlp-proto' {
  export class OTLPTraceExporter {
    constructor(config?: any);
  }
}

declare module '@opentelemetry/exporter-trace-otlp-grpc' {
  export class OTLPTraceExporter {
    constructor(config?: any);
  }
}

declare module '@opentelemetry/exporter-logs-otlp-proto' {
  export class OTLPLogExporter {
    constructor(config?: any);
  }
}

declare module '@opentelemetry/exporter-logs-otlp-grpc' {
  export class OTLPLogExporter {
    constructor(config?: any);
  }
}

declare module '@opentelemetry/exporter-prometheus' {
  export class PrometheusExporter {
    constructor(config?: any);
  }
}

declare module '@opentelemetry/exporter-metrics-otlp-http' {
  export class OTLPMetricExporter {
    constructor(config?: any);
  }
}

declare module '@opentelemetry/exporter-metrics-otlp-proto' {
  export class OTLPMetricExporter {
    constructor(config?: any);
  }
}

declare module '@opentelemetry/exporter-metrics-otlp-grpc' {
  export class OTLPMetricExporter {
    constructor(config?: any);
  }
}

declare module '@aws-sdk/client-sts' {
  export class STSClient {
    constructor(config?: any);
    send(command: any): Promise<any>;
  }
  export class GetCallerIdentityCommand {
    constructor(input?: any);
  }
  export class AssumeRoleCommand {
    constructor(input?: any);
  }
}

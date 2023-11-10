import { Logger } from "tslog";

export interface Ilogger {
  logger: unknown;

  log(...args: unknown[]): void;
  error(...args: unknown[]): void;
  warn(...args: unknown[]): void;
}

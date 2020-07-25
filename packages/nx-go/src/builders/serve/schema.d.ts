import { JsonObject } from '@angular-devkit/core';

export interface ServeBuilderSchema extends JsonObject {
  outputPath: string
  main: string
}

import { InjectionToken } from '@angular/core';

export interface IJsStringService {
  reverse(str: string) : string;
}

export let JS_STRING_SVC = new InjectionToken<IJsStringService >('js-string-svc');


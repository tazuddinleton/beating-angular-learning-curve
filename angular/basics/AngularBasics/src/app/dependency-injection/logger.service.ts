import { Injectable } from '@angular/core';


import { JS_STRING_SVC, IJsStringService } from './my-js-string-service';






// // Recepe 1: useValue
// @Injectable({
//   providedIn: 'root',
//   useValue: {
//     log: function(){
//       console.log('Recepe 1: useValue')
//     }
//   }
// })

// // Recepe 2: userClass
// @Injectable({
//   providedIn: 'root',
//   useClass: LoggerService
// })

// Recepe 3: useFactory
@Injectable({
  providedIn: 'root',
  useFactory: loggerFactory,
  deps: [JS_STRING_SVC]
})
export class LoggerService {

  constructor(private stringService: IJsStringService){

  }
  log(msg: string):void {
    console.log(this.stringService.reverse(msg));
  }
}

export function loggerFactory(service: IJsStringService){
  if(!!service){
    return new LoggerService(service);
  }
  return new OtherLoggerServie();
}

export class OtherLoggerServie {
  log(msg: string): void {
    console.log(msg);
  }
}


export interface StringLogger {
  (msg: string, date?: Date, ...more: any): string;
}

export class Logger {
  public logMsg: StringLogger;
  constructor() {
    this.logMsg = (msg: string) => {
      console.log(msg);
      return msg;
    };
  }
}

let logger = new Logger();

logger.logMsg("Hello");
logger.logMsg = (msg: string, date?: Date) => {
  console.log(msg);
  return msg;
};

export class Logger {
    public logMsg: (msg: string, date?: Date, ...more: any) => string;
    constructor() {
        this.logMsg = (msg: string) => {
            console.log(msg);
            return msg;
        };
    }
}

let logWithRest = new Logger();
logWithRest.logMsg = (msg: string, date?: Date, ...more: any[]) => {
    console.log(msg);
    more.forEach((item) => {
        console.log(item);
    });
    return msg;
};

logWithRest.logMsg("hello world", new Date(), 1, 2, 3, { key: "value" });

console.log();

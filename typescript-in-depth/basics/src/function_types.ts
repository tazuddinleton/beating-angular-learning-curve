function logEnglish(msg: string): string {
    console.log("Now logging in english...");
    console.log(msg);
    return msg;
}

function logArabic(msg: string): string {
    console.log("Now logging in arabic...");
    console.log(msg);
    return msg;
}

export class Logger {
    public logMsg: (msg: string, date?: Date, ...more: any) => string;
    constructor() {
        this.logMsg = (msg: string) => {
            console.log(msg);
            return msg;
        };
    }

    setLogger(logger: (msg: string, date?: Date, ...more: any) => string) {
        this.logMsg = logger;
    }
}

let logger = new Logger();
logger.setLogger(logEnglish);
logger.logMsg("Hello");
logger.logMsg = (msg: string, date?: Date) => {
    console.log(msg);
    return msg;
};

let frLogger = new Logger();
frLogger.setLogger((msg: string) => {
    console.log("now logging in French");
    return msg;
});

let anyLogger = new Logger();
anyLogger.setLogger((msg: string) => {
    console.log("you can log in any language now.");
    return msg;
});

let withDate = new Logger();
withDate.setLogger((msg: string, date?: Date) => {
    console.log(msg + " " + date);
    return msg;
});

let logWithRest = new Logger();
logWithRest.logMsg = (
    msg: string,
    date?: Date,
    count?: number,
    tasks?: any[]
) => {
    return msg;
};

frLogger.logMsg("hello world");
anyLogger.logMsg("log anything");

withDate.logMsg("log with date", new Date());

logWithRest.logMsg("HELLO", new Date(), 100, ["task1", "task2"]);

logWithRest.setLogger(logArabic);

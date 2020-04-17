function log(msg: string = "Default log msg"){
    console.log(msg);
}

let logMsg : (msg?: string) => void = log;

logMsg()

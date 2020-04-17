function Log(msg: string): boolean;
function Log(msg: number): boolean;
function Log(msg: boolean): boolean;

function Log(msg: any): boolean {
  switch(typeof msg){
      case "string":
        console.log("logging string : " + msg);
        break;
    case "number":
        console.log("logging number: " + msg.toString());
        break;
    case "boolean":
        console.log("logging boolean: " + msg.toString());
        break;
    default:
        throw Error("Overload not implemented");
  }  
  return true;
}

Log(true);
Log("Hello ");
Log(1200);

console.log();



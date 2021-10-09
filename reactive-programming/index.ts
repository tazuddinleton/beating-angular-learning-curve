import { Observable } from "rxjs";
import { uni_vs_multi } from "./rxjs/uni-vs-multi";


const obs = new Observable(sub => {
    let x = 1;
    sub.next(x++);
    sub.next(x++);
    sub.next(x++);
    sub.next(x++);
    sub.next(x++);
    sub.next(x++);
    sub.next(x++);
    sub.next(x++);
    sub.next(x++);
    sub.next(x++);
});


obs.subscribe(x => console.log(x));


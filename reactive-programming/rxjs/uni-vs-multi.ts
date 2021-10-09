import { from, Observable, of } from "rxjs";




export function uni_vs_multi(){
  console.log('hello');


  const obs = new Observable(sub => sub.next(Math.random()));


  let sub1 = obs.subscribe((x)=> {
    console.log('Sub1', x);
  });

  let sub2 = obs.subscribe(x => {
    console.log('Sub2: ', x);
  });

  let sub3 = obs.subscribe(x => {
    console.log('Sub3: ', x)
  })
}



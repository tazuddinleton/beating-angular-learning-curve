import { Observable } from "rxjs"

var getElementDrags = elem => {    
    elem.mouseDowns = Observable.fromEvent(elem, 'mousedown');
    elem.mouseUps = Observable.fromEvent(elem, 'mouseup');
    elem.mouseMoves = Observable.fromEvent(elem, 'mousemove');
    
    elem.mouseDowns.map(
        document.mouseMoves.takeUntil(document.mouseUps)        
    ).concatAll();

    getElementDrags(image)
    .forEach(pos => image.position = pos);
}
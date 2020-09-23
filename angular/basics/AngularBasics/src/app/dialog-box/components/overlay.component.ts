import { Component, OnInit, AfterViewInit, HostBinding, Type, ComponentRef, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ModalContentDirective } from '../directives/modal-content.directive';


@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [
    trigger('leaveTimer', [
      transition(
        ':leave',
        [
          style({opecity: 1}),
          animate('350ms linear', style({opecity: 1}))
        ]
      )
    ])
  ]
})
export class OverlayComponent implements OnInit, AfterViewInit{

  private _active = false;
  private _modal: Type<any>;
  private _componentRef: ComponentRef<any>;
  private _data: any;

  allowOverlayClick = true;
  showCloseButton = true;

  set data(data: any){
    this._data = data;
  }


  whenOverlayClicked$: EventEmitter<void> = new EventEmitter();

  @ViewChild('closeButton', {static: false}) closeButton: ElementRef;
  @ViewChild('overlay', {static: false}) overlayEl: ElementRef;
  @ViewChild(ModalContentDirective, {static: true}) contentContainer: ModalContentDirective


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }


}

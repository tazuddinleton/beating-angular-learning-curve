import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeBgColor]'
})
export class ChangeBgColorDirective implements OnInit{


  private msgEl: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2

  ) { }

  @Input('tooltip')
  tooltip: string;

  @HostBinding('style.border') border: any;
  @HostBinding('style.height') height: any;
  @HostBinding('style.width') width: any;

  @HostListener('mouseover')
  onMouseOver() {
    this.setColor('lightblue');
    this.border = "1px solid yellow"
    this.addMessage()
  };

  @HostListener('mouseout')
  onMouseout() {
    this.setColor('lightgray');
    this.el.nativeElement.removeChild(this.msgEl);
  }

  ngOnInit(): void {
    this.setColor('lightgray');

    console.log(this.el);
    this.height = '50px';
    this.width = '500px';
  }


  setColor(color: string){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  addMessage(){
    this.msgEl = document.createElement('div');
    this.msgEl.style.cssText = `height: 50px; width: 200px; margin:auto;color: yello;background:lightgray;`
    this.msgEl.textContent = this.tooltip || "Nothing to show!";
    this.el.nativeElement.appendChild(this.msgEl);
  }

}

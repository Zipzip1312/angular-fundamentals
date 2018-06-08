import { JQ_TOKEN } from './jQuery.service';
import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[modal-trigger]' })
export class ModalTriggerDirective implements OnInit {
  el: HTMLElement
  @Input('modal-trigger') modalId: string;
  constructor( ref: ElementRef, @Inject(JQ_TOKEN) private $: any ) {
    this.el = ref.nativeElement; // refference to a current DOM element [modal-trigger]
  }

  ngOnInit(){
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal('show');
    })
  }
}

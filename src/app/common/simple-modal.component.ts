import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simple-modal',
  template: `
    <div id="simple-modal" class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-body {
      height: 250px; overflow-y: scroll;
    }
  `]
})

export class SimpleModalComponent implements OnInit {
  @Input() title: string

  constructor() { }

  ngOnInit() { }
}

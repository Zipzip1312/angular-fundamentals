import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'create-event.component.html',
  styles: [`
    em {float: right; color: red}
    .error input { background-color: red; }
    .error ::-webkit-input-placeholder{color: #999}
    .error ::-moz-placeholder{color: #999}
    .error :-moz-placeholder{color: #999}
    .error :ms-input-placeholder{color: #999}
  `]
})

export class CreateEventComponent implements OnInit {
  newEvent
  isDirty: boolean = true // if form not filled out, process in app.module
  constructor( private route:Router, private eventService:EventService ) { }

  ngOnInit() { }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false
      this.route.navigate(['events'])
    });
  }

  cancel(){
    this.route.navigate(['/events'])
  }
}

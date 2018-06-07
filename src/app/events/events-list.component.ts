import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  template: `
    <div>
      <h1>Upcomming Angular Events</h1>
      <hr/>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})

export class EventsListComponent implements OnInit{
  events:IEvent[]
  constructor(
    private eventService:EventService,
    private route:ActivatedRoute
  ){}

  ngOnInit(){
    // this.events = this.eventService.getEvents();
    // this.eventService.getEvents().subscribe(events => {
    //   this.events = events
    // });
    this.events = this.route.snapshot.data['events']
  }
}

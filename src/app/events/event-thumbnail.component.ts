import { IEvent } from './shared/event.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  styles: [`
    .thumbnail{min-height: 210px}
    .pad-left{padding-left:15px;}
    .well div{
      color: #bbb;
    }
    .well div.green{color: green}
    .bold {font-weight: 700;}
  `],
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '10:00 am'}" [ngSwitch]="event?.time">
      Time: {{event.time}}
      <span *ngSwitchCase="'8:00 am'"> (Early Start)</span>
      <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
      <span *ngSwitchDefault> (Normal Start)</span>
      </div>
      <div>Price: \${{ event.price }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event.location.adress}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <div>Price: \${{ event.price }}</div>
      <div *ngIf="event?.onlineUrl">
        <span>Online URL: {{event.onlineUrl}}</span>
      </div>
    </div>
  `
})

export class EventThumbnailComponent {
  @Input() event:IEvent
}

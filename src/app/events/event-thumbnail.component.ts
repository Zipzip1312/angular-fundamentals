import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  styles: [`
    .pad-left{padding-left:15px;}
    .well div{
      color: #bbb;
    }
  `],
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{ event.price }}</div>
      <div>
        <span>Location: {{event.location.adress}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
      </div>
    </div>
  `
})

export class EventThumbnailComponent {
  @Input() event:any
}

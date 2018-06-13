import { EventService } from './shared/event.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class EventsResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(+route.params['id']);
  }
}

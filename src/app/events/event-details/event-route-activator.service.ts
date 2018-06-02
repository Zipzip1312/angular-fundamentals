import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  constructor(
    private router:Router,
    private eventService:EventService
  ){}

  canActivate(route:ActivatedRouteSnapshot){
    const routeExist = !!this.eventService.getEvent(+route.params['id'])
    if(!routeExist)
      this.router.navigate(['/404']);
    return routeExist
  }
}

import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { CreateEventComponent } from './events/create-event.component';
import { Routes } from '@angular/router'
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { Error404Component } from './errors/404.component';


export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent},
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', pathMatch: 'full', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/events' }
]

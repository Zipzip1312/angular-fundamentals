import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventsListResolverService } from './events/events-list-resolver.service';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { CreateEventComponent } from './events/create-event.component';
import { Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { Error404Component } from './errors/404.component';
import { EventsResolverService } from './events/event-resolver.service';


export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } },
  { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventsResolverService } },
  // { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', pathMatch: 'full', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/events' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
];

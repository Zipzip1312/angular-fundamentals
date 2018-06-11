import { VoterService } from './events/event-details/voter.service';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { JQ_TOKEN } from './common/jQuery.service';
import { DurationPipe } from './events/shared/duration.pipe';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsListResolverService } from './events/events-list-resolver.service';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { SimpleModalComponent } from './common/simple-modal.component';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { ValidateLocationDirective } from './events/location-validator.directive';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    NavBarComponent,
    SimpleModalComponent,
    UpvoteComponent,
    DurationPipe,
    ModalTriggerDirective,
    ValidateLocationDirective
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    { provide: JQ_TOKEN, useValue: jQuery},
    { provide: TOASTR_TOKEN, useValue: toastr},
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolverService,
    AuthService,
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(createEvent: CreateEventComponent) {
  if (createEvent.isDirty)
    window.confirm('Leave without saving event?');
  return true
}

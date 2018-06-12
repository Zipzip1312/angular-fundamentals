import { EventService } from './../events/shared/event.service';
import { ISession, IEvent } from './../events/shared/event.model';
import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styles: [`
    .nav.navbar-nav{ font-size:15px; }
    #searchForm { margin-right: 100px; }
    @media(max-width:1200px){#searchForm{display:none;}}
    li > a.active {color:orange}
  `]
})

export class NavBarComponent implements OnInit {
  serachTerm: string = ""
  foundSessions: ISession[]
  eventsList: IEvent[]

  constructor (
    public auth:AuthService,
    private eventService: EventService
  ){}

  ngOnInit(){
    this.eventService.getEvents().subscribe(data => {
      this.eventsList = data
    })
  }

  searchSessions(serachTerm){
    this.eventService.searchSessions(serachTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    );
  }
}

import { ISession } from './../shared/event.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[]
  @Input() filterBy: string
  visibleSessions: ISession[]

  constructor() { }

  ngOnChanges(){
    if (this.sessions) { // if sessions are set
      this.filterSessions(this.filterBy)
    }
  }

  filterSessions(filter){
    if(filter === 'all'){
      this.visibleSessions = this.sessions.slice(0); // creates new array of sessions
    }else{
      this.visibleSessions = this.sessions.filter(sessions => sessions.level.toLocaleLowerCase() === filter);
    }
  }

  ngOnInit() {  }
}

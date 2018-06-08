import { ISession } from './../shared/event.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[]
  @Input() filterBy: string
  @Input() sortBy: string
  visibleSessions: ISession[]

  constructor() { }

  ngOnChanges(){
    if (this.sessions) { // if sessions are set
      this.filterSessions(this.filterBy)
      this.sortBy === 'name'
      ? this.visibleSessions.sort(sortByNameAsc)
      : this.visibleSessions.sort(sortByVotesDesc);
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

function sortByNameAsc(s1: ISession, s2: ISession){
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession){
  return s2.voters.length - s1.voters.length
  // if s2 voters are greater then s1 it will return positive value
  // if equals -> 0
  // if less -> negative value
  // we are using desc sort, for asc sort change s2 to s1 and backward
}
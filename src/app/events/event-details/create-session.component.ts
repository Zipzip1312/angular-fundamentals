import { Router } from '@angular/router';
import { ISession } from './../shared/event.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { restrictedWords, restrictedWords2 } from "../shared/restricted-words.validator";

@Component({
  selector: 'create-session',
  templateUrl: 'create-session.component.html',
  styles: [`
    em {float: right; color: red}
    .error input, .error select, .error textarea { background-color: red; }
    .error ::-webkit-input-placeholder{color: #999}
    .error ::-moz-placeholder{color: #999}
    .error :-moz-placeholder{color: #999}
    .error :ms-input-placeholder{color: #999}
  `]
})

export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter()
  @Output() cancelCreateNewSession = new EventEmitter()
  newSessionForm: FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl

  constructor(private route:Router ) { }

  saveSession(formValues){
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      level: formValues.level,
      duration: +formValues.duration,
      abstract: formValues.abstract,
      voters: []
    }
    this.saveNewSession.emit(session);
  }

  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [
        Validators.required,
        Validators.maxLength(400),
        restrictedWords,
        restrictedWords2(['bar', 'zoo'])
      ])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    })
  }

  cancel(){
    // this.route.navigate(['events'])
    this.cancelCreateNewSession.emit()
  }
}

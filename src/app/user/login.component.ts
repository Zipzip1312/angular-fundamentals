import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  userName
  password
  constructor() { }

  ngOnInit() { }

  login(loginForm){
    console.log(loginForm.value);
  }
}

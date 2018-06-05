import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: 'login.component.html',
  styles: [`
    em{float:right;color:red}
  `]
})

export class LoginComponent implements OnInit {

  userName
  password
  mouseoverLogin

  constructor( private authService:AuthService, private router: Router ) { }

  ngOnInit() { }

  login(formValue){
    // console.log(formValue.userName, formValue.password);
    this.authService.loginUser(formValue.userName, formValue.password)
    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }
}

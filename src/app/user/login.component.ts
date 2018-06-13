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

  userName = 'johnpapa';
  password: any = 123;
  mouseoverLogin;
  loginInvalid = false;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() { }

  login(formValue) {
    // console.log(formValue.userName, formValue.password);
    this.authService.loginUser(formValue.userName, formValue.password)
      .subscribe(resp => {
        if (!resp) { // invalid login ( returns false )
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}

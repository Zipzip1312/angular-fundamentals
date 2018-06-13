import { AuthService } from './auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';


@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float: right; color: red}
    .error input { background-color: red; }
    .error ::-webkit-input-placeholder{color: #999}
    .error ::-moz-placeholder{color: #999}
    .error :-moz-placeholder{color: #999}
    .error :ms-input-placeholder{color: #999}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-z].*')
    ]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValue) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValue.firstName, formValue.lastName)
        .subscribe(() => {
          this.toastr.success('Profile Saved!');
        });
      // this.router.navigate(['events']);
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }
}

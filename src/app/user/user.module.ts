import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [],
})
export class UserModule { }

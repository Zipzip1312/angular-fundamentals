import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from "./user.model";
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class AuthService {
  currentUser: IUser
  constructor( private http: HttpClient ) { }

  loginUser(userName: string, password: string){

    let loginInfo = { username: userName, password: password }
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap( data => {
        this.currentUser = <IUser>data['user']
      }))
      .pipe(catchError( err => {
        return of(false) // Observable of false (if login incorrect)
      }))
    // this.currentUser = {
    //   id: 1,
    //   firstName: 'John',
    //   lastName: 'Papa',
    //   userName: userName
    // }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus(){
    this.http.get('/api/currentIdentity') // server method that check if user is authenticated
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = <IUser>data;
        }
      }))
      .subscribe()
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }
}

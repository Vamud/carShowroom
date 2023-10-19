import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { EnvironmentService } from '@app/services/environment.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseApiUrl: string;
  private _isAuth = new BehaviorSubject<boolean>(false);
  isAuth$ = this._isAuth.asObservable();
  private _userName = new BehaviorSubject<string | null>(null);
  userName$ = this._userName.asObservable();
  private _errorMessage = new BehaviorSubject<string | null>(null);
  errorMessage$ = this._errorMessage.asObservable();

  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService,
    private location: Location
  ) {
    this.baseApiUrl = this.environmentService.getValue('baseApiUrl');
    if (sessionStorage.getItem('accesToken') !== null) {
      this._isAuth.next(true);
      this._userName.next(sessionStorage.getItem('userName'));
    }
  }

  logIn(email: string, password: string) {
    this.http
      .post(this.baseApiUrl + '/login', {
        email: email,
        password: password,
      })
      .subscribe({
        next: (response: any) => {
          sessionStorage.setItem('accesToken', response.acces_token);
          sessionStorage.setItem('userName', response.userName);
          this._userName.next(response.userName);
          this._isAuth.next(true);
          this.location.back();
        },
        error: (error: any) => {
          if (error.status === 401) {
            this._errorMessage.next(
              'User with such login and password was not found. Try again'
            );
          } else if (error.status === 400) {
            this._errorMessage.next('Email and/or password are not set');
          }
        },
      });
  }

  sighIn(
    name: string,
    email: string,
    password: string
  ) {
    this.http
      .post(this.baseApiUrl + '/register', {
        name: name,
        email: email,
        password: password,
      })
      .subscribe({
        next: (_: any) => {
          this.logIn(email, password);
        },
        error: (error: any) => {
          if (error.status === 401) {
            this._errorMessage.next(
              'User with such login and password was not found. Try again'
            );
          } else if (error.status === 400) {
            this._errorMessage.next('Email and/or password are not set');
          }
        },
      });
  }

  logOut() {
    sessionStorage.removeItem('accesToken');
    sessionStorage.removeItem('userName');
    this._userName.next(null);
    this._isAuth.next(false);
  }
}

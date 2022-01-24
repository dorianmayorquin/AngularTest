import { Injectable } from '@angular/core';
import { ILoginResult } from './ilogin-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginStat: ILoginResult = { loginSuccessful: true };
  loginResult:any;
  constructor() { }

  login(username: string, password: string): Promise<ILoginResult> 
  {

    this.loginResult = new Promise<ILoginResult>((resolve, reject) => {

      if (username.length > 0 && password.length > 0) 
      {
        this.loginStat.loginSuccessful = true;
        resolve(this.loginStat);
      } 
      else 
      {
        this.loginStat.loginSuccessful = false;
        reject(this.loginStat);
      }
      
    });
    return this.loginResult;
  }
}

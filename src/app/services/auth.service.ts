import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginAuth(credentials: any){
    return new Promise((accept, reject) => {
      if(credentials.email == 'brayan@gmail.com'){
        accept('login Correcto');
      }else{
        reject('login incorrecto');
      }
    });
  }
}

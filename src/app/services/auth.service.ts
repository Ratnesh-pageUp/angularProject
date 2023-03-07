import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email:string,password:string):void{

  }

  logout():void{
    localStorage.removeItem(environment.tokenName)
    //write a statement for navigate user to login page
  }
  
}

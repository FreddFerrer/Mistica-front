import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITY_KEY = 'AuthAuthority';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  rol: string;

  constructor() { }


  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public setAuthorities(authority: string): void {
    window.sessionStorage.removeItem(AUTHORITY_KEY);
    window.sessionStorage.setItem(AUTHORITY_KEY, JSON.stringify(authority));
  }

  public getAuthority(): string | null {
    if (sessionStorage.getItem(AUTHORITY_KEY)) {
      return JSON.parse(sessionStorage.getItem(AUTHORITY_KEY)).authority;
    }
    return null;
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}

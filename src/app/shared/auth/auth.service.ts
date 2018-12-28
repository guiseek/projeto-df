import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthCredential, AuthProfile } from './auth';
import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private STORAGE_KEY: string = '_AUTH';
  public static $profile: Subject<Profile> = new Subject<Profile>();
  constructor(
    private http: HttpClient
  ) { }

  login(credential: AuthCredential): Observable<AuthProfile | any> {
    return this.http.post<AuthProfile>(
      `${environment.API_URL}/user/session`, credential,
      { headers: { 'X-Dreamfactory-Api-key': environment.API_KEY } }
    ).pipe(
      map((response) => this.setAuth(response)),
      catchError((response) => throwError(response.error.error))
    );
  }
  setAuth(auth: AuthProfile): void {
    if (!auth) return;
    window.localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(auth)
    );
  }
  getAuth() {
    return JSON.parse(
      window.localStorage.getItem(this.STORAGE_KEY)
    ) || {};
  }
  destroyAuth(): void {
    window.localStorage.removeItem(this.STORAGE_KEY);
  }
}

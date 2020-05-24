import { Injectable } from '@angular/core';
import { ApiRoute } from '../../../constant/api-route';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignUp } from '../sign-up/sign-up';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private _addRegistrationApiUrl: string = ApiRoute.Rest_Api_EndPoint + 'Save';
  // private _loginApiUrl:string=ApiRoute.Rest_Api_EndPoint+"login";
  private _getRegistrationApiUrl: string =
    ApiRoute.Rest_Api_EndPoint + 'getData';

  constructor(private http: HttpClient) {}

  public postRegisrationData(form: SignUp): Observable<SignUp[]> {
    return this.http
      .post(this._addRegistrationApiUrl, form, httpOptions)
      .pipe(map((response: any) => response));
  }
  public getRegisrationData(): Observable<SignUp[]> {
    return this.http
      .get(this._getRegistrationApiUrl)
      .pipe(map((response: any) => response));
  }
}

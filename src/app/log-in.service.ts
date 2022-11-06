import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogInViewModel } from './log-in-view-model';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService
{
  private httpClient: HttpClient | null = null;
  urlPrefix: string = "http://localhost:9090"; //make this as empty ("") if you are using asp.net core [without CORS]

  constructor(private httpBackend: HttpBackend, private jwtHelperService: JwtHelperService)
  {
  }

  currentUserName: any = null;

  public Login(loginViewModel: LogInViewModel): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>(this.urlPrefix + "/authenticate", loginViewModel, { responseType: "json" ,observe:"response"})
      .pipe(map(response =>
      {
        if (response)
        {
          this.currentUserName = response.body.userName;
          sessionStorage['currentUser'] = JSON.stringify(response.body);
          sessionStorage['XSRFRequsetToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
        }
        return response.body;
      }));
  }

  public Logout()
  {
    sessionStorage.removeItem("currentUser");
    this.currentUserName = null;
  }

  public isAuthenticated(): boolean
  {
    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null;
    if (this.jwtHelperService.isTokenExpired(token))
    {
      return false; //token is not valid
    }
    else
    {
      return true; //token is valid
    }
  }
}


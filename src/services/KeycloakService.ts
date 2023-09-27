import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {

  constructor(private http: HttpClient) {
  }

  public Login(username: string, password: string): Observable<any> {
    const newHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const body = new HttpParams()
      .set("grant_type", "password")
      .set("client_id", "frontend")
      .set("username", username)
      .set("password", password);
    return this.http.post('http://localhost:8080/realms/ThesisHub/protocol/openid-connect/token', body, {
      headers: newHeaders,
      responseType: "json" as "json"
    })
  }

  public Logout(access_token: string, refresh_token: string, username: string, password: string): Observable<any> {
    const newHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: "Bearer " + access_token
    });
    const body = new HttpParams()
      .set("client_id", "frontend")
      .set("refresh_token", refresh_token)
      .set("username", username)
      .set("password", password);
    return this.http.post("http://localhost:8080/realms/ThesisHub/protocol/openid-connect/logout", body, {
      headers: newHeaders,
      responseType: "json" as "json"
    });
  }

  public hasRole(role: string): boolean {
    const access_token: string = localStorage.getItem("access_token")!;
    if (access_token != undefined) {
      const roles: string = (JSON.parse(atob(access_token.split('.')[1]))).resource_access.frontend.roles;
      console.log(roles);
      return roles.includes(role);
    }
    return false;
  }


}

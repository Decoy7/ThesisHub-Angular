import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Thesis} from "../models/Thesis";

@Injectable({
  providedIn: 'root'
})
export class ThesisService {
  access_token: string = localStorage.getItem("access_token")!;
  constructor(private http: HttpClient) {}

  public getAllThesis(): Observable<Thesis[]>{
    const newHeaders = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':"Bearer " + this.access_token});
    return this.http.get<Thesis[]>("url/api/thesis",{headers: newHeaders, responseType: "json" as "json"});
  }

  public requestAssignment(thesis_id:number): Observable<Thesis>{
    const newHeaders = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':"Bearer " + this.access_token});
    return this.http.post<Thesis>("url/api/thesis/assign/"+thesis_id,{headers: newHeaders, responseType: "json" as "json"});
  }
}

import { Injectable } from '@angular/core';
//import { Http, Headers } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { environment } from "../../environments/environment";

const API_URL = environment.apiUrl;

const apiRelativePath: string = "ApiList/"

const headers: HttpHeaders = new HttpHeaders()
  .set("access-control-allow-origin", "*")
  .set("withCredentials","true");

  function identity<T>(arg: T): T {
    return arg;
  }

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  GetApiData(url: string): Observable<any> {
    return this.http.get<Observable<any>>(API_URL + apiRelativePath + url, { headers })
  }


  SetApiData(url: string, data: any): Observable<any> {
    return this.http.post(API_URL + apiRelativePath + url, data, { headers })
  }

  //-- a way to get the returned data as the type of the calling function returned type --//
  //*------------------------------------------------------------------------------------*//
  // SetApiData<T>(url: string, data: any): Observable<T> {
  //   return this.http.post<T>(API_URL + apiRelativePath + url, data, { headers }).map(res => {
  //     return res
  //   })
  // }

  
  GetApiDataCustom(url: string): Observable<any> {
    return this.http.get<any>(API_URL + url, { headers })
  }

  SetApiDataCustom(url: string, data: any): Observable<any> {
    return this.http.post(API_URL + url, data, { headers })
  }

}

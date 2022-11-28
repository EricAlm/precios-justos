import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } 	from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PreciosService {
  url: string | undefined;

  constructor(
    public _http: HttpClient 

  ) { 
    this.url = environment.url;

  }

  getPrecios(url:string):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(url, {headers: headers});
  }
}

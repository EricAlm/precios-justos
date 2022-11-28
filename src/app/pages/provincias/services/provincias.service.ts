import {EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } 	from '@angular/common/http'; 
import { Observable } 				from 'rxjs'
import { environment } from '../../../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class ProvinciasService {
  url: string | undefined;
  
  selectProvincia=new EventEmitter<any>();

  constructor(
    public _http: HttpClient 
  ) { 
    this.url = environment.url;
  }
  getProvincias():Observable<any>{
   let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
   return this._http.get(this.url+'provincias.json', {headers: headers});
 }


}

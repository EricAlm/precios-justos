import { Injectable } from '@angular/core';
import { HttpClient } 	from '@angular/common/http'; 
import { BehaviorSubject, map } from 'rxjs';
import { Observable } from 'rxjs'

export interface Provincia {
  id: number;
  nombre: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProvinciasService {

  provincia: Provincia = {
    id: 0,
    nombre: '',
    url: '',
  };

  public provinciaSelect = new BehaviorSubject<Provincia>(this.provincia);
  
  constructor( private _http: HttpClient ) { 
    this.getProvincias();
  }

  getProvinciaSelect() : Observable<Provincia>{
    return this.provinciaSelect.asObservable();
  }

  setProvincia(provincia : Provincia) : void{
    this.provinciaSelect.next(provincia);
  }

  getProvincias() {
    return this._http.get('./assets/api/provincias.json').pipe(
      map((data: any) => {
        let response = data.map((provincia: any) => {
          let aux = {
            ...provincia,
            url: provincia.api,
          };
          delete aux.api;
          return aux;
        });
        return response;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PreciosService {
  url: string = '';

  constructor( private _http: HttpClient ) { }

  getPrecios(provincia:string) {
    return this._http.get('./assets/api/' + provincia+'.json')
      .pipe(
        map((data: any) => {
          data.values.shift()
          data.values.shift()

          return data.values.map((producto:any) => {
            let precioTemp = producto[2]
              .replace('.', '')
              .replace(',', '.')
            return {
              ean: parseInt(producto[0]),
              nombre: producto[1],
              precio: parseFloat(precioTemp),
            }
          })
        })
      )
  }
}

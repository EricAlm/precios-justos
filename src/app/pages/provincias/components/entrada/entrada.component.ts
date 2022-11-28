import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../../services/provincias.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  provincia_select : Subscription | undefined; 
  provincia: any;
  provincia_format: any;

  constructor(
    private _provinciasService: ProvinciasService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
        this.provincia=params['provincia'];
        if(this.provincia=='null'){
          this._router.navigate(['home']);
        }
        this.formatProvincia(this.provincia);
        console.log(this.provincia);
    });
    this.escucharProvincia();
  }
  
  escucharProvincia(){
    this.provincia_select=this._provinciasService.selectProvincia.subscribe(
      response=>{
        if(response!=='Seleccione Provincia'){
          this.provincia=response;
          this.formatProvincia(this.provincia);
        }else{
          this._provinciasService.selectProvincia.emit(null);
        }
           //this._provinciasService.selectProvincia.emit(this.provincia);
           console.log(this.provincia, 'desde entrada'); 
         }
       );
  }

  formatProvincia(provincia:string){
    this.provincia_format=provincia.split(' ').join('_');
    this.provincia_format=this.provincia_format.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(this.provincia_format);
//función para dar formato al nombre de prov, para que coincida con el nombre del archivo de imagen
  }

}

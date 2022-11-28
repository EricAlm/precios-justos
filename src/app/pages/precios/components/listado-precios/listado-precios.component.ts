import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from 'src/app/pages/provincias/services/provincias.service';
import { PreciosService } from '../../services/precios.service';
import { Subscription, switchAll } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Precio } from '../../models/Precio';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listado-precios',
  templateUrl: './listado-precios.component.html',
  styleUrls: ['./listado-precios.component.css']
})
export class ListadoPreciosComponent implements OnInit {
  provincia_select : Subscription | undefined; 
  provincia: any;
  provincias: any;
  precios:any;
  preciosArray: Precio[] | undefined ; 
  constructor(
    private _provinciasService: ProvinciasService,
    private _preciosService: PreciosService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.provincia=params['provincia'];
        this.getProvincias(this.provincia);
      }
    );
    this.getEscucharProvincia();
  }

  // escucharProvincia(){
  //   this.provincia_select=this._provinciasService.selectProvincia.subscribe(
  //     response=>{
  //       if(response!=='Seleccione Provincia'){
  //         this.provincia=response;
  //         this.getProvincias(); 
  //       }else{
  //         this._provinciasService.selectProvincia.emit(null);
  //       }
  //          //this._provinciasService.selectProvincia.emit(this.provincia);
  //          console.log(this.provincia, 'desde entrada'); 
  //        }
  //      );
  // }
  getProvincias(provincia:string){
    this._provinciasService.getProvincias().subscribe(
      response=>{
        console.log(response);
        let provincias=response; 
        for (const prov of provincias) {
          if(prov.nombre==provincia){
            this.getPrecios(prov.api);
          }
        }
      },
      error=>{
        console.log(<any>error); 
      }
    );
  }

  getPrecios(api:string){
    Swal.fire('Cargando lista de precios');
    Swal.showLoading();

    this._preciosService.getPrecios(api).subscribe(
      response=>{
        console.log(response);
        this.precios=(response.values);
        this.formatArray(this.precios);
        Swal.close();
      },
      error=>{
        console.log(error)
      }
    );
  }

  formatArray(precios:any){
    this.preciosArray=[];
    let j=0;
    for (let i = 2; i < precios.length; i++) {
      let price= new Precio('','','');
      price.ean=precios[i][0];
      price.descripcion=precios[i][1];
      price.precio=precios[i][2];
      this.preciosArray[j]=price;
      j++; 
    }
  }


  getEscucharProvincia(){
    this.provincia_select=this._provinciasService.selectProvincia.subscribe(
      response=>{
        console.log(response);
        //this.provincia=response; 
        this._router.navigate(['/provincias/' + response]);
        
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../../services/provincias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css'],
})
export class EntradaComponent implements OnInit {
  provincia: any = '';
  provincia_format: any;

  constructor( private _route: ActivatedRoute, 
               private _provinciasService : ProvinciasService,
               private _router: Router ) { 
    if (!this._provinciasService.provinciaSelect.value.nombre){
      //o 404
      this._router.navigateByUrl(`home`); 
    }
  }

  ngOnInit(): void {
    //una vez subscripto, siempre esta escuchando los cambios en la URL
    this._route.params.subscribe((params) => {
      //extraigo el parametro de la url
      this.provincia = params['provincia'];
      //para mostrar las imagenes de cda Provincia
      this.provincia_format = this.provincia.split(' ').join('-');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvinciasService } from '../../services/provincias.service';

export interface Provincia {
  id: number;
  nombre: string;
  url: string;
}

@Component({
  selector: 'app-provincias-select',
  templateUrl: './provincias-select.component.html',
  styleUrls: ['./provincias-select.component.css']
})
export class ProvinciasSelectComponent implements OnInit {

  provincias: Provincia[] = [];

  provinciaSlctd = {} as Provincia;

  constructor( private _provinciasService: ProvinciasService, private _router: Router) {
    _provinciasService.getProvincias().subscribe((data: any) => {
      this.provincias = data;
    });
  }

  ngOnInit(): void { }

  selectProv(){ 
    this._provinciasService.setProvincia(this.provinciaSlctd);
    this._router.navigateByUrl(`provincias/${this.provinciaSlctd.nombre}`); 
  }
}

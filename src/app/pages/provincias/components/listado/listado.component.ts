import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../../services/provincias.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  provincias:any; 
  provSelected:any; 
  constructor(
    private _provinciasService: ProvinciasService
  ) { }

  ngOnInit(): void {
    this.getProvincias();
  }
  getProvincias(){
    this._provinciasService.getProvincias().subscribe(
      response=>{
        console.log(response); 
        this.provincias=response; 
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
  selectProv(){
   // console.log(this.provSelected); 
    this._provinciasService.selectProvincia.emit(this.provSelected);
  }

}

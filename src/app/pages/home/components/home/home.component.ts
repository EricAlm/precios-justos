import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProvinciasService } from 'src/app/pages/provincias/services/provincias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  provincia_select: Subscription | undefined
  provincia: any; 
  constructor(
    private _provinciasService: ProvinciasService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getEscucharProvincia(); 
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

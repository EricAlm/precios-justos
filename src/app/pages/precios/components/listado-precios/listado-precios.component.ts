import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from 'src/app/pages/provincias/services/provincias.service';
import { PreciosService } from '../../services/precios.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface Producto {
  ean: number,
  nombre: string,
  precio: number
}

@Component({
  selector: 'app-listado-precios',
  templateUrl: './listado-precios.component.html',
  styleUrls: ['./listado-precios.component.css']
})
export class ListadoPreciosComponent implements OnInit {

  productos: Producto[] = [];
  // lista de productos filtrados, que le muestro usuarios
  productosFiltrados: Producto[] = [];
  provinciaSeleccionada = this._provinciasService.provinciaSelect;
  provincia : any;
  filtroTexto: string = "";
  filtroPrecio: number = 0;
  precioMaximo: number = 1000;
  p: number = 1;
  form = new FormGroup({});


  constructor(
    private _provinciasService: ProvinciasService,
    private _preciosService: PreciosService,
    private _router: Router,
    fb: FormBuilder
  ) { 
    if (!this._provinciasService.provinciaSelect.value.nombre){
      //o 404
      this._router.navigateByUrl(`home`); 
    } else {
      this.form = fb.group({
        orden: [null, Validators.required]
      });
    }
  }

  ngOnInit(): void { 
    this.getProductos();
  }

  getProductos(){
    Swal.fire(`Cargando lista de precios de ${this.provinciaSeleccionada.getValue().nombre}`);
    Swal.showLoading();

    this._preciosService.getPrecios(this.provinciaSeleccionada.getValue().url).subscribe((data: Producto[]) =>{
          Swal.close();
          this.productos = data;
          this.productosFiltrados = data;
          // actualizar la variable que contiene el precio maximo de los productos
          this.precioMaximo = Math.max(...this.productos.map((producto) => producto.precio)) + 1;
          this.filtroPrecio = this.precioMaximo;
      }
    );
  }

  onFiltroTextoChange(parametroIngresado: any) {
    this.productosFiltrados = this.productos.filter((producto) => {
      if (this.filtroPrecio != 0){
        // esto significa que el usuario ingreso filtro
        // tengo que filtrar por nombre y codigo y ademas por precio
        return (producto.nombre.toLowerCase().includes(parametroIngresado.toLowerCase())
            || (producto.ean + '').includes(parametroIngresado)) && producto.precio <= this.filtroPrecio;
      }
      else{
        // solo filtro por nombre y por codigo
        return producto.nombre.toLowerCase().includes(parametroIngresado.toLowerCase())
          || (producto.ean + '').includes(parametroIngresado);
      }
    });
    this.sort();
  }

  onFiltroPrecioChange(parametroIngresado: any) {
    this.productosFiltrados = this.productos.filter((producto) => {
      if (this.filtroTexto != ""){
        return producto.precio <= parametroIngresado && (
          producto.nombre.toLowerCase().includes(this.filtroTexto.toLowerCase())
            || (producto.ean + '').includes(this.filtroTexto)
        )
      }
      else{
        return producto.precio <= parametroIngresado;
      }
    });
    this.sort();
  }

  sort(){
    if (this.form.value.orden != null){
      if (this.form.value.orden){
        this.productosFiltrados.sort((a, b) => a.precio - b.precio)
      } else {
        this.productosFiltrados.sort((a, b) => (a.precio - b.precio) * -1)
      }                    ;
    }
  }

}

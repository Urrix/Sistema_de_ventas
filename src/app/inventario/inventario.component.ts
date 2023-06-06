import { Component } from '@angular/core';
import { ProductosService, producto } from '../productos.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  productos!:producto[];

  constructor(private productosService:ProductosService){
    this.productos = productosService.productos;
  }
}

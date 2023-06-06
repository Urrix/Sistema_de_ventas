import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  public productos:producto[] = [
    {
      codigo: "1",
      costo: 14,
      descripcion: "Cocacola",
      stock:12,
      precio: 20
    },
    {
      codigo: "2",
      costo: 12,
      descripcion: "Gansito",
      stock:8,
      precio:17
    },
    {
      codigo: "3",
      costo: 15,
      precio: 18,
      descripcion: "Takis azules pitufo",
      stock:5
    },
    {
      codigo: "4",
      costo: 2,
      descripcion: "Bolillo",
      stock:20,
      precio: 4
    },
    {
      codigo: "5",
      costo: 20,
      precio: 15,
      descripcion: "Doritos",
      stock:40
    },
  ]

}

export interface producto{
  stock:number;
  descripcion:string;
  costo:number;
  codigo:string;
  precio:number;
}

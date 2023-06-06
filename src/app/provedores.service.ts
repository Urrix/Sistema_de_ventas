import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvedoresService {

constructor() { }

  public provedores:provedor[] = [
    {
      contacto: "449-4938416",
      compania: "Coca-cola",
     nombre: "Julio Cesar",
      Id_provedor:352416,
      producto:"refresco",
    },
    {
      contacto: "449-5678900",
      compania: "Bimbo",
      nombre:"Juan Perez",
      Id_provedor:856,
      producto:"pan",
    },
    {
      contacto: "334-9008978",
      compania: "Donas Luisa",
     nombre: "Luisa Martinez",
      Id_provedor:896,
      producto:"Bolillos",
    },
    {
      contacto: "449-9090678",
      compania: "Barcel",
      nombre:"Manny Paqueo",
      Id_provedor:2023,
      producto:"papas",
    },
    {
      contacto: "456-0987890",
      compania: "Marinela",
      nombre:"Gerardo Femat",
      Id_provedor:49084,
      producto:"Galletas",
    },
  ]

}
export interface provedor{
  Id_provedor:number;
  nombre:string;
  compania:string;
  contacto:string;
  producto:string;
}

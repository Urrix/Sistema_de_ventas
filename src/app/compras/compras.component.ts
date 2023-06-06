import { Component } from '@angular/core';
import {ProvedoresService, provedor} from 'src/app/provedores.service'

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  provedores!:provedor[];

  constructor(private provedoresService:ProvedoresService){
    this.provedores = provedoresService.provedores;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  folio!: string;
  fecha!: string;
  lugar!: string;
  descripcion!: string;
  usuario!: string;
  cantidad!: string;
  importe!: string;
  tipoPago!: string;
  pago!: string;

  registrar(){
    Swal.fire('Nota de venta','Se ha registrado correctamente la nota de venta: ' + this.folio, 'success');
    this.folio = "";
    this.fecha = "";
    this.lugar = "";
    this.descripcion = "";
    this.usuario = "";
    this.cantidad = "";
    this.importe = "";
    this.tipoPago = "";
    this.pago = "";;
    this.usuario = "";
    this.cantidad = "";
    this.importe = "";
    this.tipoPago = "";
    this.pago = "";

    //
  }

  // Otros campos y propiedades necesarios

  agregarProducto() {
    // Lógica para agregar el producto a la nota
  }

  cancelarNota() {
    // Lógica para cancelar la nota actual
  }

  buscarNota() {
    // Lógica para buscar una nota existente
  }

  realizarCorteParcial() {
    // Lógica para realizar un corte parcial
  }

  realizarCorteGlobal() {
    // Lógica para realizar un corte global
  }

  nuevaVenta() {
    // Lógica para comenzar una nueva venta
  }

  onProductoChange(){

  }



  // Otros métodos y lógica necesarios
}

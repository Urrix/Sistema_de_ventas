import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component'; // Asegúrate de importar el componente
import { FormsModule } from '@angular/forms';
import { ProductosService } from './productos.service';
import { InventarioComponent } from './inventario/inventario.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { ProvedoresService } from './provedores.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    InventarioComponent,
    VentasComponent,
    ComprasComponent// Agrega el componente aquí
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductosService,
    ProvedoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

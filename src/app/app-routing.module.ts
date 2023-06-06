import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasComponent } from './ventas/ventas.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ComprasComponent } from './compras/compras.component';
import { MenuPrincipalComponent } from "./menu-principal/menu-principal.component";

const routes: Routes = [
  { path: 'ventas', component: VentasComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'compras', component: ComprasComponent },
  {path: '', component: VentasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

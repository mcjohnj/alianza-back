import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './Cliente/crear/crear.component';
import { ListarComponent } from './Cliente/listar/listar.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'crear',component:CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './usuario/lista/lista.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';


const routes: Routes = [
  { path: 'home', component: ListaComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

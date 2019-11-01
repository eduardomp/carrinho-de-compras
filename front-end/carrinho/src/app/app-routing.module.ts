import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotImplementedYetComponent } from './not-implemented-yet/not-implemented-yet.component';

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario/:id', component: UsuarioDetailComponent },
  {
    path: 'usuarios',
    component: UsuarioListComponent,
    data: { title: 'Usuários' }
  },
  { path: '',
     redirectTo: '/usuarios',
     pathMatch: 'full'
  },
  { path: 'in_development', component: NotImplementedYetComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

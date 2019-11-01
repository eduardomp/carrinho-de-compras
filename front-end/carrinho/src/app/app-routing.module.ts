import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotImplementedYetComponent } from './not-implemented-yet/not-implemented-yet.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CarrinhoListComponent } from './carrinho-list/carrinho-list.component';
import { CarrinhoDetailComponent } from './carrinho-detail/carrinho-detail.component';
import { CarrinhoFechadoComponent } from './carrinho-fechado/carrinho-fechado.component';

const routes: Routes = [
  //usuario
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario/:id', component: UsuarioDetailComponent },
  {
    path: 'usuarios',
    component: UsuarioListComponent,
    data: { title: 'Usuários' }
  },
  //item
  { path: 'item', component: ItemComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  {
    path: 'itens',
    component: ItemListComponent,
    data: { title: 'Itens' }
  },
  //carrinho
  {
    path: 'carrinhos',
    component: CarrinhoListComponent,
    data: { title: 'Carrinhos' }
  },
  { path: 'carrinho/:id/aberto', component: CarrinhoDetailComponent },
  { path: 'carrinho/:id/fechado', component: CarrinhoFechadoComponent },
  //redirects
  { path: '',
     redirectTo: '/carrinhos',
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

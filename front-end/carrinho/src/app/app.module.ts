import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { UsuarioComponent } from './usuario/usuario.component';
import {MatFormFieldModule, MatInputModule ,MatCardModule,MatButtonModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule} from '@angular/material';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NotImplementedYetComponent } from './not-implemented-yet/not-implemented-yet.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoListComponent } from './carrinho-list/carrinho-list.component';
import { CarrinhoDetailComponent } from './carrinho-detail/carrinho-detail.component';
import { CompraComponent } from './compra/compra.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioDetailComponent,
    UsuarioListComponent,
    PageNotFoundComponent,
    SideMenuComponent,
    NotImplementedYetComponent,
    ItemComponent,
    ItemListComponent,
    ItemDetailComponent,
    CarrinhoComponent,
    CarrinhoListComponent,
    CarrinhoDetailComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

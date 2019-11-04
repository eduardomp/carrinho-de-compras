import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatDividerModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoDetailComponent } from './carrinho-detail/carrinho-detail.component';
import { CarrinhoListComponent } from './carrinho-list/carrinho-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { NotImplementedYetComponent } from './not-implemented-yet/not-implemented-yet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CarrinhoFechadoComponent } from './carrinho-fechado/carrinho-fechado.component';
import { ServicesModule } from './services/services.module';
import { FormsModule }   from '@angular/forms';


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
    CarrinhoListComponent,
    CarrinhoDetailComponent,
    CarrinhoFechadoComponent
    
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
    MatSortModule,
    MatDividerModule,
    ServicesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { ItemService } from './item.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  providers:[UsuarioService, ItemService]
})
export class ServicesModule { }

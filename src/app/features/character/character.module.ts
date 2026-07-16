import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RelationshipComponent } from './relationship/relationship.component';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterProfileComponent,
    InventoryComponent,
    RelationshipComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }

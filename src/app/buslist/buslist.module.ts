import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuslistPageRoutingModule } from './buslist-routing.module';

import { BuslistPage } from './buslist.page';
import { ComponentsModule } from '../component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuslistPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BuslistPage]
})
export class BuslistPageModule {}

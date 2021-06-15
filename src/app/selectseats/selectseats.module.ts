import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectseatsPageRoutingModule } from './selectseats-routing.module';

import { SelectseatsPage } from './selectseats.page';
import { ComponentsModule } from '../component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectseatsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SelectseatsPage]
})
export class SelectseatsPageModule {}

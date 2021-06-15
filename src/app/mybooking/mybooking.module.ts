import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MybookingPageRoutingModule } from './mybooking-routing.module';

import { MybookingPage } from './mybooking.page';
import { ComponentsModule } from '../component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MybookingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MybookingPage]
})
export class MybookingPageModule {}

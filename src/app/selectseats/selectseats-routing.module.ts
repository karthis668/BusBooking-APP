import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectseatsPage } from './selectseats.page';

const routes: Routes = [
  {
    path: '',
    component: SelectseatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectseatsPageRoutingModule {}

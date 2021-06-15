import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuslistPage } from './buslist.page';

const routes: Routes = [
  {
    path: '',
    component: BuslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuslistPageRoutingModule {}

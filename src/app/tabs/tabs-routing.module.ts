import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
  path: 'tabs',
  component: TabsPage,
  children: [
    {
      path: 'home',
      children:[
        {
          path:'',
          loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
        },
        {
          path:'buslists',
          loadChildren: ()=> import('../buslist/buslist.module').then( m=> m.BuslistPageModule),
        }
      ]
    },
    {
      path: 'mybookings',
      loadChildren: () => import('../mybooking/mybooking.module').then(m => m.MybookingPageModule),
    },
    {
      path: 'myaccount',
      loadChildren: () => import('../myaccount/myaccount.module').then(m => m.MyaccountPageModule)
    },
    {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
    }
  ]
},
{
  path: '',
  redirectTo: '/tabs/home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

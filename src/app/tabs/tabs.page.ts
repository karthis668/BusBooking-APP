import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {


  tabname: any;

  constructor() {}

  ngOnInit() {
  }

  gettabs(ev: any){
    console.log(ev);
    this.tabname = ev.tab;
  }

}

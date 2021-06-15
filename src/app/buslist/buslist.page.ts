import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.page.html',
  styleUrls: ['./buslist.page.scss'],
})
export class BuslistPage implements OnInit {
  busLists: any;
  constructor(
    public busService: BusService,
    public router: Router
  ) { }

  ngOnInit() {
   this.busLists = this.busService.buses;
  }

  gotoseatsPage(id){
    this.router.navigate(['/selectseats',id]);
  }

}

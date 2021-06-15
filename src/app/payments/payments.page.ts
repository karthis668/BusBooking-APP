import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  totalAmount: any;
  paymentoption: any = 'gpay';
  constructor(
    public busServices: BusService,
    public router: Router
  ) { }

  ngOnInit() {
    this.totalAmount = this.busServices.getTotal();
  }

  changepaymentoption(ev: any){
    console.log(ev.detail.value);
    this.paymentoption = ev.detail.value;
  }

  gotosuccessPage(){
    this.router.navigate(['success']);
  }

}

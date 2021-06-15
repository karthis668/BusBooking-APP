import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-selectseats',
  templateUrl: './selectseats.page.html',
  styleUrls: ['./selectseats.page.scss'],
})
export class SelectseatsPage implements OnInit {

  leftseats: any[] ;
  rightseats: any[];
  isSeatselected = false;
  isbooked = false;
  isreserved = false;
  isavailable = false;
  travelsID: any;
  travelsDetails: any;
  total: any;
  seatCount: any;

  constructor(
    public busService: BusService,
    public router: Router,
    public route: ActivatedRoute,
  ) {
    route.params.subscribe(
      res=>{
        this.travelsID = Number(res.id);
        console.log(this.travelsID);
      }
    );
   }

  ngOnInit() {
   this.travelsDetails = this.busService.buses.find(res=> res.id === this.travelsID);
    console.log(this.travelsDetails);
    this.leftseats =[
      {
        id:1,
        status:'available',
        selected:false
      },
      {
        id:2,
        status:'available',
        selected:false
      },
      {
        id:3,
        status:'booked',
        selected:false
      },
      {
        id:4,
        status:'available',
        selected:false
      },
      {
        id:4,
        status:'available',
        selected:false
      },
      {
        id:5,
        status:'booked',
        selected:false
      },
      {
        id:6,
        status:'available',
        selected:false
      },
      {
        id:7,
        status:'reserved',
        selected:false
      },
      {
        id:8,
        status:'reserved',
        selected:false
      },
      {
        id:9,
        status:'available',
        selected:false
      },
      {
        id:10,
        status:'available',
        selected:false
      },
      {
        id:11,
        status:'available',
        selected:false
      },
      {
        id:12,
        status:'available',
        selected:false
      },
      {
        id:13,
        status:'available',
        selected:false
      },
      {
        id:14,
        status:'available',
        selected:false
      },
      {
        id:15,
        status:'available',
        selected:false
      },
    ];

    this.rightseats =[
      {
        id:15,
        status:'available',
        selected:false
      },
      {
        id:16,
        status:'available',
        selected:false
      },
      {
        id:17,
        status:'booked',
        selected:false
      },
      {
        id:18,
        status:'available',
        selected:false
      },
      {
        id:19,
        status:'available',
        selected:false
      },
      {
        id:20,
        status:'booked',
        selected:false
      },
      {
        id:21,
        status:'available',
        selected:false
      },
      {
        id:22,
        status:'reserved',
        selected:false
      },
      {
        id:23,
        status:'reserved',
        selected:false
      },
      {
        id:24,
        status:'available',
        selected:false
      },
      {
        id:25,
        status:'available',
        selected:false
      },
      {
        id:26,
        status:'available',
        selected:false
      },
      {
        id:27,
        status:'available',
        selected:false
      },
      {
        id:28,
        status:'available',
        selected:false
      },
      {
        id:29,
        status:'available',
        selected:false
      },
      {
        id:30,
        status:'available',
        selected:false
      },
    ];

    this.total =this.busService.getTotal();
    this.seatCount = this.busService.getseatCount();
    console.log(this.seatCount);
  }

  onclickLeftSeat(index,lseatid,lseatstatus,lseatselected){
    if(this.leftseats[index].status === 'available'){
      this.isavailable = true;
      this.leftseats[index].selected =! this.leftseats[index].selected;
    }
    else if(this.leftseats[index].status === 'booked'){
      this.isbooked = true;
    }
    else if(this.leftseats[index].status === 'reserved'){
      this.isreserved = true;
    }
    if(this.leftseats[index].selected){
      this.busService.addSeat(this.travelsID,lseatid);
    }
    else{
      if(this.leftseats[index].status !== 'booked' && this.leftseats[index].status !== 'reserved'){
        this.busService.removeseats(this.travelsID,lseatid);
      }
    }
    this.total =this.busService.getTotal();
    this.seatCount = this.busService.getseatCount();
  }

  onclickRightSeat(index,rseatid,rseatstatus,rseatselected){
    if(this.rightseats[index].status === 'available'){
      this.isavailable = true;
      this.rightseats[index].selected =! this.rightseats[index].selected;
    }
    else if(this.rightseats[index].status === 'booked'){
      this.isbooked = true;
    }
    else if(this.rightseats[index].status === 'reserved'){
      this.isreserved = true;
    }
    if(this.rightseats[index].selected){
      this.busService.addSeat(this.travelsID,rseatid);
    }
    else{
      if(this.rightseats[index].status !== 'booked' && this.rightseats[index].status !== 'reserved'){
        this.busService.removeseats(this.travelsID,rseatid);
      }
    }
    this.total =this.busService.getTotal();
    this.seatCount = this.busService.getseatCount();
}

proceedTopayment(){
  this.router.navigate(['/payments']);
}

}

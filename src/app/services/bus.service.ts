/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  [x: string]: any;
  buses = [
    {
      id: 1,
      name: 'Shrinath Travels',
      price: 1500.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '8 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 2,
      name: 'VRL Travels',
      price: 1700.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '6 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 3,
      name: 'Neeta Travels',
      price: 1300.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 4,
      name: 'Shrinath Travels',
      price: 1750.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '5 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 5,
      name: 'SRS Travels',
      price: 1156.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 6,
      name: 'Parveen Travels',
      price: 1156.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 7,
      name: 'Orange Travels',
      price: 1156.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 8,
      name: 'Kallada Travels',
      price: 1156.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 9,
      name: 'Jabbar Travels',
      price: 1156.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 10,
      name: 'Jeppiaar Travels',
      price: 1156.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 11,
      name: 'SRM Travels',
      price: 1156.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 12,
      name: 'Paulo Travels',
      price: 1156.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 13,
      name: 'Kaveri Travels ',
      price: 1156.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 14,
      name: 'Hebron Travels',
      price: 1156.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
    {
      id: 15,
      name: 'Raj Ratan Travels',
      price: 1156.00,
      type:'Volvo AC Sleeper',
      seats: '52',
      startingtime:'9.30 PM',
      departtime:'4.50 AM',
      traveltime: '7 hr 30 m',
      rating: '4.7',
      scount: 0,
      seatno:[]
    },
  ];
  private busSeats = [];
  private seatItemCount = new BehaviorSubject(0);
  private seats = new BehaviorSubject<string[]>([]);


  constructor(
    public toastController: ToastController
  ) { }



  getbookingitems(){
  console.log(this.seats.value);
  return this.seats.value;
  }

  claerseats() {
    this.seatItemCount.next(0);
    this.seats.next(null);

  }

  getseatCount() {
    return this.seatItemCount.value;
  }

  addSeat(id,seatsnos) {
    const addedseats = this.buses.filter(response => response.id === id);
    let added = false;
    console.log(seatsnos);
    console.log(addedseats);

    if (addedseats[0]) {
      addedseats[0].seatno.push(seatsnos);
      this.seatItemCount.next(this.seatItemCount.value + 1);
      added = true;
    }
    console.log(addedseats);
   if(addedseats[0].seatno.length === 1){
    this.busSeats.push( addedseats[0]);
    console.log(this.busSeats);
    this.seats.next(this.busSeats);
   }
    console.log(this.busSeats);
    this.getTotal();
    this.presentToast('seat added successfully');
  }

  removeseats(id, seatid) {
    const addedseats = this.buses.find(response => response.id === id);
    const index = addedseats.seatno.indexOf(seatid);
    addedseats.seatno.splice(index, 1);
    this.seatItemCount.next(this.seatItemCount.value - 1);
    // alert(addedseats[0].seatno.length);
    console.log(addedseats);
    if (addedseats.seatno.length === 0) {
      const buslistindex = this.busSeats.findIndex(pop => pop.id === id);
      console.log(buslistindex);
      this.busSeats.splice(buslistindex, 1);
    }
    this.getTotal();
    this.presentToast('seat Removed successfully');
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  getTotal() {
    const bookings = this.getbookingitems();
    console.log(bookings);
    const total = this.busSeats.reduce((i, j) => i + j.price * j.seatno.length, 0);
    console.log(total);
    return total;
 }
}

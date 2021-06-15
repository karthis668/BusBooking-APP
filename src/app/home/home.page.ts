import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('datetime') calender;
  @ViewChild('start') start;
  @ViewChild('end') end;
  currentDate ;
  isToday = false;
  today: any;
  startingPlace = 'Bangaluru';
  endingPlace = 'Chennai';

  constructor(
    public router: Router
  ) {
    this.currentDate =  moment(this.currentDate).format('YYYY-MM-DD');
    this.today= moment().format('YYYY-MM-DD');
    if(this.today === this.currentDate){
      this.isToday = true;
    }
    console.log(this.today);
  }

  opendate(){
    this.calender.open();
  }

  updateMyDate(ev: any){
    console.log(moment(ev.detail.value).format('YYYY-MM-DD'));
  }

  swapPlace(){
    this.startingPlace = this.end.value;
    this.endingPlace = this.start.value;
  }

  searchbus(){
    this.startingPlace = this.start.value;
    this.endingPlace = this.end.value;
    console.log( this.startingPlace);
    console.log(this.endingPlace);
    this.router.navigateByUrl('tabs/home/buslists');
  }

  updatestartingPlace(ev: any){
    this.startingPlace = ev.detail.value;
  }

  updateEndingPlace(ev: any){
    this.endingPlace = ev.detail.value;
  }

  tommorow(){
    const todayMoment = moment();
    const tomorrowMoment = todayMoment.clone().add(1,'days');
  }

}

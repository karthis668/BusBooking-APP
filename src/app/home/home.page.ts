import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';



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
  isTomorrow= false;
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
    else{
      this.isToday = false;
    }
    console.log(this.today);
  }

  opendate(){
    this.calender.open();
  }

  updateMyDate(ev: any){
    console.log(moment(ev.detail.value).format('YYYY-MM-DD'));
    console.log(this.currentDate);
    this.currentDate = moment(this.currentDate).format('YYYY-MM-DD');
    if(this.today === this.currentDate){
      this.isToday = true;
    }
    else{
      this.isToday = false;
    }
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
    const tomorrow  = moment().add(1,'days');
    this.currentDate = tomorrow;
    if(tomorrow === this.currentDate){
      this.isTomorrow = true;
    }
    else{
      this.isTomorrow = false;
    }
    // const tomorrow = todayMoment.clone().add(1,'days');
  }

  todayfn(){
    this.today= moment().format('YYYY-MM-DD');
    this.currentDate =  this.today;

    if(this.today === this.currentDate){
      this.isToday = true;
      this.isTomorrow = false;
    }
    else{
      this.isToday = false;
    }
    // const tomorrow = todayMoment.clone().add(1,'days');
  }

}

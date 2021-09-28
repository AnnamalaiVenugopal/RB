import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public select: string = "";

  constructor() { 
  }

  ngOnInit(): void {
 
  }

  changeCottageType(event: any){
     let noOfPeople = event.target.value;
    if( noOfPeople > 2 && noOfPeople < 13){
      this.select = "1";
    } else if(noOfPeople > 12 && noOfPeople < 26){
      this.select = "2";
    }
  }

}

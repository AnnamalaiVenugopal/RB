import { Component, OnInit } from '@angular/core';
import rooms from '../../../assets/json/rooms.json';
import cottages from '../../../assets/json/cottages.json';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public select: number;

  public rooms : Array<string> = new Array();

  public cost: number = 0;

  public roomsJSON : [{
    roomType:"",
    description:"",
    cost:0
  }];

  public cottagesJSON : [{
    cottageType:"",
    description:"",
    cost:0
  }];

  constructor() { 
    this.select = 0;
    this.roomsJSON = rooms;
    this.rooms.push("Select a Cottage Type");
    for(let i=0; i< this.roomsJSON.length;i++){
      this.rooms.push(this.roomsJSON[i].roomType);
    }

    this.cottagesJSON = cottages.cottages;
    for(let i=0; i< this.cottagesJSON.length;i++){
      this.rooms.push(this.cottagesJSON[i].cottageType);
    }
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("roomType") && sessionStorage.getItem("roomType") != null){
      let roomType = sessionStorage.getItem("roomType") || "";
      console.log(roomType)
      if(roomType != ""){
        console.log(this.rooms.indexOf(roomType));
        this.select = this.rooms.indexOf(roomType);
        if(sessionStorage.getItem("type") == "room"){
            this.cost = this.roomsJSON[this.select-1].cost;
        }else if(sessionStorage.getItem("type") == "cottage"){
          this.cost = this.cottagesJSON[this.select- this.roomsJSON.length - 1].cost;
        }
      }
    }
    sessionStorage.removeItem("type");
    sessionStorage.removeItem("roomType");
  }

  changeCottageType(event: any){
     let noOfPeople = event.target.value;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  @Input() room: any;
  public roomJson:{};

  constructor(public router: Router) { 
    this.roomJson = this.room;
  }

  ngOnInit(): void {
    
  }

  bookRooms(room: any){
    console.log(room);
    sessionStorage.setItem("type","room");
    sessionStorage.setItem("roomType", room.roomType);
    sessionStorage.setItem("cost",room.cost);
    this.router.navigate(['/booking']);
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  @Input() room: any;
  public roomJson:{};

  constructor() { 
    this.roomJson = this.room;
  }

  ngOnInit(): void {
    
  }

  bookRooms(){
    console.log(this.roomJson);
  }
}

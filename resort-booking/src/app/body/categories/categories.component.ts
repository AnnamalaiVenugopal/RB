import { Component, OnInit } from '@angular/core';
import rooms from "../../../assets/json/rooms.json";
import cottages from "../../../assets/json/cottages.json"

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public rooms : any;
  public cottagesDescription : string;
  public cottages: any;
  constructor() {
    this.rooms = rooms;
    this.cottagesDescription = cottages.description;
    this.cottages = cottages.cottages;
   }

  ngOnInit(): void {
  }

}

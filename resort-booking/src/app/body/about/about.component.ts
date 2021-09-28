import { Component, OnInit } from '@angular/core';
import location from '../../../assets/json/location.json'
import touristplaces from '../../../assets/json/touristplaces.json'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public location : {};
  public touristplaces : [{}];
  constructor() { 
    this.location = location;
    this.touristplaces = touristplaces;
  }

  ngOnInit(): void {
  }

}

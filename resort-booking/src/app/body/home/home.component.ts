import { Component, OnInit } from '@angular/core';
import activities from '../../../assets/json/activities.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public activities: any;
  constructor() { 
    this.activities = activities;
  }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import location from '../../../../assets/json/location.json'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() location: any;
  public about: string;

  constructor() { 
    this.about = location.about;
  }

  ngOnInit(): void {

  }


}

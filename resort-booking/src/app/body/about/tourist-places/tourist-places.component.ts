import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tourist-places',
  templateUrl: './tourist-places.component.html',
  styleUrls: ['./tourist-places.component.css']
})
export class TouristPlacesComponent implements OnInit {

  @Input() place: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cottages',
  templateUrl: './cottages.component.html',
  styleUrls: ['./cottages.component.css']
})
export class CottagesComponent implements OnInit {

  @Input() cottage: any;
  constructor() { }

  ngOnInit(): void {
  }


  bookCottages(){
    console.log(this.cottage);
  }
}

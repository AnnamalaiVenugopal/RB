import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cottages',
  templateUrl: './cottages.component.html',
  styleUrls: ['./cottages.component.css']
})
export class CottagesComponent implements OnInit {

  @Input() cottage: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  bookCottages(cottage: any){
    console.log(cottage);
    sessionStorage.setItem("type","cottage");
    sessionStorage.setItem("roomType", cottage.cottageType);
    sessionStorage.setItem("cost",cottage.cost);
    this.router.navigate(['/booking']);
  }
}

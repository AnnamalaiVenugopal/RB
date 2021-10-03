import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import navbar from '../../../assets/json/navbar.json'

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  public navbar: any = [{
    value:"",
    link:"",
    active:""
  }];

  public activeIndex: any;

  constructor(public router:Router) { 
    this.navbar = navbar;
  }

  ngOnInit(): void {
    let url = window.location.href.substring(window.location.href.lastIndexOf('/')+1);
    for(let i = 0; i < this.navbar.length; i++){
      if(url == this.navbar[i].link){
        this.setActiveIndex(i);
        this.getActiveClass(i);
        break;
      }
    }
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  getActiveClass(i: number) {
    return this.activeIndex == i ? 'active' : '';
  }

  navigate(url: string){
    this.router.navigate(['/'+url]);
  }

}

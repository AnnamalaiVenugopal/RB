import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public image = {
    url:""
  };
  public counter = 1;
  public timer:any;
  constructor() {  
      this.image.url = "assets/images/gallery/"+1+".jpeg";
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      console.log("Changing the image")
      this.counter++;
      if(this.counter > 20){
        this.counter = 1;
      }
      this.image.url = "assets/images/gallery/"+this.counter+".jpeg";
    }, 5000);
  }

  resetTimer(count:any){
    this.counter = count;
    clearInterval(this.timer);
    this.timer = setInterval(
      () => {
      console.log("Changing the image")
      this.counter++;
      if(this.counter > 20){
        this.counter = 1;
      }
      this.image.url = "assets/images/gallery/"+this.counter+".jpeg";}, 5000);
  }

  prevImage(){
    this.counter--;
    if(this.counter < 1){
      this.counter = 20;
    }
    this.image.url = "assets/images/gallery/"+this.counter+".jpeg";
    this.resetTimer(this.counter-1); 
  }

  nextImage(){
    this.counter++;
    if(this.counter > 20){
      this.counter = 1;
    }
    this.image.url = "assets/images/gallery/"+this.counter+".jpeg";
    this.resetTimer(this.counter-1);
  }

}

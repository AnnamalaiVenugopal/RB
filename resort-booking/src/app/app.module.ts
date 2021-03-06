import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftHeaderComponent } from './header/left-header/left-header.component';
import { RightHeaderComponent } from './header/right-header/right-header.component';
import { ContactComponent } from './header/right-header/contact/contact.component';
import { PhoneNumberComponent } from './header/right-header/contact/phone-number/phone-number.component';
import { EmailComponent } from './header/right-header/contact/email/email.component';
import { MatIconModule } from '@angular/material/icon';
import { BodyComponent } from './body/body.component';
import { NavigationBarComponent } from './body/navigation-bar/navigation-bar.component';
import { ImageSliderComponent } from './body/image-slider/image-slider.component';
import { HomeComponent } from './body/home/home.component';
import { AboutComponent } from './body/about/about.component';
import { GalleryComponent } from './body/gallery/gallery.component';
import { FeedbackComponent } from './body/feedback/feedback.component';
import { BookingComponent } from './body/booking/booking.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PageUnderConstructionComponent } from './body/page-under-construction/page-under-construction.component';
import { LoaderComponent } from './body/loader/loader.component';
import { LocationComponent } from './body/about/location/location.component';
import { TouristPlacesComponent } from './body/about/tourist-places/tourist-places.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './body/categories/categories.component';
import { RoomsComponent } from './body/rooms/rooms.component';
import { CottagesComponent } from './body/cottages/cottages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftHeaderComponent,
    RightHeaderComponent,
    PhoneNumberComponent,
    EmailComponent,
    ContactComponent,
    BodyComponent,
    NavigationBarComponent,
    ImageSliderComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    FeedbackComponent,
    BookingComponent,
    PageUnderConstructionComponent,
    LoaderComponent,
    LocationComponent,
    TouristPlacesComponent,
    FooterComponent,
    CategoriesComponent,
    RoomsComponent,
    CottagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule    
  ],
  // providers:[{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

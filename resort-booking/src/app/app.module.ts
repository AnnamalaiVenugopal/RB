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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftHeaderComponent,
    RightHeaderComponent,
    PhoneNumberComponent,
    EmailComponent,
    ContactComponent,
    BodyComponent
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

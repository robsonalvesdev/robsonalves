import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './navigation/course/course.component';
import { AboutComponent } from './navigation/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { UniversityComponent } from './navigation/university/university.component';
import { ContactComponent } from './navigation/contact/contact.component';
import { ServiceComponent } from './navigation/service/service.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { PortifolioComponent } from './navigation/portifolio/portifolio.component';
import { TeamComponent } from './navigation/team/team.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { CourseformationComponent } from './navigation/courseformation/courseformation.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AboutComponent,
    UniversityComponent,
    ContactComponent,
    ServiceComponent,
    NavbarComponent,
    PortifolioComponent,
    TeamComponent,
    FooterComponent,
    CourseformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

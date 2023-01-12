import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseComponent} from './navigation/course/course.component';
import {BookreadComponent} from './navigation/bookread/bookread.component';
import {AboutComponent} from './navigation/about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {UniversityComponent} from './navigation/university/university.component';
import {ContactComponent} from './navigation/contact/contact.component';
import {ServiceComponent} from './navigation/service/service.component';
import {NavbarComponent} from './navigation/navbar/navbar.component';
import {PortifolioComponent} from './navigation/portifolio/portifolio.component';
import {TeamComponent} from './navigation/team/team.component';
import {FooterComponent} from './navigation/footer/footer.component';
import {CourseformationComponent} from './navigation/courseformation/courseformation.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './navigation/home/home.component';
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';
import {environment} from 'src/environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localePt, 'pt-BR');


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
    CourseformationComponent,
    HomeComponent,
    BookreadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule,
    NgbModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './navigation/about/about.component';
import { ContactComponent } from './navigation/contact/contact.component';
import { CourseComponent } from './navigation/course/course.component';
import { CourseformationComponent } from './navigation/courseformation/courseformation.component';
import { ServiceComponent } from './navigation/service/service.component';
import { UniversityComponent } from './navigation/university/university.component';

const routes: Routes = [
  // { path: '', redirectTo: '/services', pathMatch: 'full'},
  // { path: 'services', component: ServiceComponent},
  // { path: 'about', component: AboutComponent},
  // { path: 'university', component: UniversityComponent},
  // { path: 'courses', component: CourseComponent},
  // { path: 'coursesformation', component: CourseformationComponent},
  // { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

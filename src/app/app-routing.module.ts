import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

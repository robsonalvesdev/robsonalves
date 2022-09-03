import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './navigation/about/about.component';
import { CourseComponent } from './navigation/course/course.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'course', component: CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

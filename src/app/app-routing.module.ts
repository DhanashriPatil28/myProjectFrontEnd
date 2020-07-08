import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { TrainingHomeComponent} from './training-home/training-home.component';
import { CourseHomeComponent } from './course-home/course-home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { UpdateCourseComponent } from './update-course/update-course.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  {path: "",component: LoginComponent,

      children: [
        {
          path: 'aboutUs',
          component: AboutUsComponent,
        },
        {
          path: 'contactUs',
          component: ContactUsComponent,
        }
      ]},

  {path: "home",component: HeaderComponent,
      children: [
        {
          path: 'get',
          component: CourseHomeComponent,
        },
        {
          path: '',
          component: CourseHomeComponent,
        },
        {
          path: 'update',
          component: UpdateCourseComponent,
        },
        {
          path: 'material',
          component: TrainingHomeComponent,
        },
        {
          path: 'add',
          component: AddCourseComponent,
        }
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

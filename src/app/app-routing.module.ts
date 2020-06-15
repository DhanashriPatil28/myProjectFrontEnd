import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { TrainingHomeComponent} from './training-home/training-home.component';
import { CourseHomeComponent } from './course-home/course-home.component';
import { Login1Component } from './login1/login1.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: "",component: Login1Component,pathMatch: 'full'},
  {path: "home",component: HeaderComponent,
      children: [
        {
          path: 'course',
          component: CourseHomeComponent,
        },
        {
          path: 'trainingMaterial',
          component: TrainingHomeComponent,
        }
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

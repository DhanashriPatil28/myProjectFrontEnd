import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { TrainingHomeComponent} from './training-home/training-home.component';
import { CourseHomeComponent } from './course-home/course-home.component';
import { AddCourseComponent } from './courseCRUD/add-course/add-course.component';

const routes: Routes = [
  {path: "course",component: CourseHomeComponent},
  {path: "trainingMaterial", component: TrainingHomeComponent },
  {path: "addCourse", component: AddCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

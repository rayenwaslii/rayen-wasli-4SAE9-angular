import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentComponent } from './show-student/show-student.component';

const routes: Routes = [
  {path:"home",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"student",component:StudentComponent},
  {path:"student/showstudent/:id",component:ShowStudentComponent},
  {path:"student/addstudent",component:AddStudentComponent},
  {path:"**",component:PagenotfoundComponent}


];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

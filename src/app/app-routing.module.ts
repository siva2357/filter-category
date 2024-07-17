// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectUploadComponent } from './components/project-upload/project-upload.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

const routes: Routes = [

  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'upload', component: ProjectUploadComponent },
  { path: 'projects', component: ProjectListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

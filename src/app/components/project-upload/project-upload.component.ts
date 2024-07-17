// src/app/project-upload/project-upload.component.ts

import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';
import { Project } from 'src/app/Modal/project.modal';

@Component({
  selector: 'app-project-upload',
  templateUrl: './project-upload.component.html',
  styleUrls: ['./project-upload.component.css']
})
export class ProjectUploadComponent {
  project: Project = {
    name: '',
    description: '',
    category: '',
    image: ''
  };

  categories: string[] = ['Art Concept', '3D Environment Modelling', 'Web Development', 'AI and ML'];

  constructor(private projectService: ProjectService, private router: Router) { }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.project.image = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  submitProject(): void {
    this.projectService.addProject(this.project).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

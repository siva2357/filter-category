// src/app/components/project-list/project-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/Modal/project.modal'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  categories: string[] = ['All', 'Art Concept', '3D Environment Modelling', 'Web Development', 'AI and ML'];
  selectedCategory: string = 'All';

  projectsByCategory: { [key: string]: Project[] } = {};

  constructor(private projectService: ProjectService,private router:Router) { }

  ngOnInit(): void {
    this.loadProjects('All');
  }

  loadProjects(category: string): void {
    if (category === 'All') {
      this.projectService.getAllProjects().subscribe(projects => {
        this.projects = projects;
        this.projectsByCategory = this.groupProjectsByCategory(projects);
      });
    } else {
      this.projectService.getProjectsByCategory(category).subscribe(projects => {
        this.projectsByCategory[category] = projects;
      });
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.loadProjects(category);
  }

  private groupProjectsByCategory(projects: Project[]): { [key: string]: Project[] } {
    const grouped: { [key: string]: Project[] } = {
      'Art Concept': [],
      '3D Environment Modelling': [],
      'Web Development': [],
      'AI and ML': []
    };
    projects.forEach(project => {
      if (grouped[project.category]) {
        grouped[project.category].push(project);
      }
    });
    return grouped;
  }

}









// src/app/components/project-list/project-list.component.ts

// import { Component, OnInit } from '@angular/core';
// import { ProjectService } from 'src/app/services/project.service';
// import { Project } from 'src/app/Modal/project.modal'; // Adjust import path as needed
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-project-list',
//   templateUrl: './project-list.component.html',
//   styleUrls: ['./project-list.component.css']
// })
// export class ProjectListComponent implements OnInit {
//   projects: Project[] = [];
//   categories: string[] = ['All', 'Art Concept', '3D Environment Modelling', 'Web Development', 'AI and ML'];
//   selectedCategory: string = 'All';

//   constructor(
//     private projectService: ProjectService,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.loadProjects('All');
//   }

//   loadProjects(category: string): void {
//     if (category === 'All') {
//       this.projectService.getAllProjects().subscribe(projects => {
//         this.projects = projects;
//       });
//     } else {
//       this.projectService.getProjectsByCategory(category).subscribe(projects => {
//         this.projects = projects;
//       });
//     }
//   }

//   selectCategory(category: string): void {
//     this.selectedCategory = category;
//     this.loadProjects(category);
//   }

//   viewProjectDetails(id: string): void {
//     this.router.navigate(['/project-details', id]);
//   }
// }

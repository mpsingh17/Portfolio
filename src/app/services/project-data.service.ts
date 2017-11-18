import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable()
export class ProjectDataService {
  projects: Project[] = [
    {
      id: 1,
      name: 'Vidly',
      description: 'I made it using ASP.NET MVC5',
      imagePath: '/assets/imgs/vidly.png'
    },
    {
      id: 2,
      name: 'Billu Silk Store',
      description: 'I made it using AngularJS',
      imagePath: '/assets/imgs/billuSilkStore.png'
    }
  ];

  constructor() { }

  // Get all projects.
  getAllProjects() {
    return this.projects;
  }

  // Get single project based on ID.
  getSingleProject(id: number) {
    return this.projects[id];
  }
}

import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable()
export class ProjectDataService {
  projects: Project[] = [
    {
      name: 'Vidly',
      description: 'I made it using ASP.NET MVC5',
      imagePath: '/assets/imgs/vidly.png'
    },
    {
      name: 'Portfolio',
      description: 'I made it using AngularJS',
      imagePath: '/assets/imgs/billuSilkStore.png'
    }
  ];

  constructor() { }

  // Get all projects.
  getAllProjects() {
    return this.projects;
  }
}

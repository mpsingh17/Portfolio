import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable()
export class ProjectDataService {
  projects: Project[] = [
    {
      name: 'Vidly',
      description: 'I made it using ASP.NET MVC5',
      imagePath: '/images/something.png'
    },
    {
      name: 'Portfolio',
      description: 'I made it using AngularJS',
      imagePath: '/images/something.png'
    }
  ];

  constructor() { }

  // Get all projects.
  getAllProjects() {
    return this.projects;
  }
}

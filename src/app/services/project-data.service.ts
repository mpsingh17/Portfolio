import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable()
export class ProjectDataService {
  projects: Project[] = [
    {
      id: 1,
      name: 'Vidly',
      description: 'I\'ve used MVC5 to build this app. It cover required aspects of MVC5 development...',
      imagePath: '/assets/imgs/vidly.png',
      projectURL: 'https://github.com/mpsingh17/Vidly'
    },
    {
      id: 2,
      name: 'Billu Silk Store',
      description: 'This app is built with MVC5 for a cloth shop and can be converted to eStore...',
      imagePath: '/assets/imgs/billuSilkStore.png',
      projectURL: 'https://github.com/mpsingh17/SilkBStore'
    },
    {
      id: 3,
      name: 'Client Panel',
      description: 'This app is built with AngularJS 4 for managing clients and their details...',
      imagePath: '/assets/imgs/clientPanel.png',
      projectURL: 'https://github.com/mpsingh17/clientpanel'
    }
  ];

  constructor() { }

  // Get all projects.
  getAllProjects() {
    return this.projects;
  }

  // Get single project based on ID.
  getSingleProject(id: number) {
    return this.projects[id - 1];
  }
}

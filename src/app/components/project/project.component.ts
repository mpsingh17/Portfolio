import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Project } from '../../models/Project';
import { ProjectDataService } from '../../services/project-data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  id: number;
  project: Project;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private projectDataService: ProjectDataService,
  ) { }

  ngOnInit() {
    // Getting ID from route.
    this.id = this.activeRoute.snapshot.params['id'];

    // Get project from service using ID.
    this.project = this.projectDataService.getSingleProject(this.id);
    
  }

}

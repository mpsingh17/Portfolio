import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../../services/project-data.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: any[];

  constructor(
    public projectDataService: ProjectDataService
  ) { }

  ngOnInit() {
    this.projects = this.projectDataService.getAllProjects();
  }

}

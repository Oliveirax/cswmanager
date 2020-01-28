import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Data } from '../models/data.model';
import { Project } from '../models/project.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public data: Data;
  public selectedProject: Project;

  constructor( private dataService: DataService ) {
    console.log("projects component NEW");
  }

  ngOnInit() {
    console.log("projects component INIT");

    this.dataService.getData().subscribe(
      value => {
        this.data=value;
        console.log("projects got the data");
      }
    )
  }

  rowSelected(project: Project) {
    this.selectedProject = project;
    console.log("clicked: " + project.name)
  }

  openEmployees(project: Project){
    console.log("open employees for: " + project.name);
  }
}

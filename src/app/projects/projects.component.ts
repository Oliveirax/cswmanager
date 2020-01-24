import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Data } from '../models/data.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public data: Data;

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
}

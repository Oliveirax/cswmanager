import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Data } from '../models/data.model';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: Data;
  public selectedEmployee: Employee;

  constructor( private dataService: DataService ) {
    console.log("home component NEW");
  }

  ngOnInit() {
    console.log("home component INIT");

    this.dataService.getData().subscribe(
      value => {
        this.data=value;
        console.log("home got the data");
      }
    )
  }

  rowSelected(employee: Employee) {
    this.selectedEmployee = employee;
    console.log("clicked: " + employee.name);
  }

  openProjects(employee: Employee){
    console.log("open projects for: " + employee.name);
  }
}

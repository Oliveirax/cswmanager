// Service designed to get all the other services' data

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

// services
import { AllocationService } from './allocation.service';
import { EmployeeService } from './employee.service';
import { PlatoonService } from './platoon.service';
import { ProjectService } from './project.service';
import { RoleService } from './role.service';

// models
import { Allocation } from '../models/allocation.model';
import { Employee } from '../models/employee.model';
import { Platoon } from '../models/platoon.model';
import { Project } from '../models/project.model';
import { Role } from '../models/role.model';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private data: Data;
  private dataObservable: BehaviorSubject<Data> = new BehaviorSubject<Data>(null);

  constructor(  private allocationService: AllocationService,
                private employeeService: EmployeeService,
                private platoonService: PlatoonService,
                private projectService: ProjectService,
                private roleService: RoleService ) {
    console.log("Data Service fetching.....");
    this.reload();
  }

  public getData(): Observable<Data> {
    return this.dataObservable;
  }

  public reload() {
    this.data = new Data();
    this.fetchAllocations();
    this.fetchEmployees();
    this.fetchPlatoons();
    this.fetchProjects();
    this.fetchRoles();

  }

  private fetchAllocations() {
    this.allocationService.getAllAllocations().subscribe(
      value => {
        this.data.allocations = value;
        this.dataObservable.next(this.data);
        console.log("fetched allocations");
      }
    );
  }

  private fetchEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      value => {
        this.data.employees = value;
        this.dataObservable.next(this.data);
        console.log("fetched employees");
      }
    );
  }

  private fetchPlatoons() {
    this.platoonService.getAllPlatoons().subscribe(
      value => {
        this.data.platoons = value;
        this.dataObservable.next(this.data);
        console.log("fetched Platoons");
      }
    );
  }

  private fetchProjects() {
    this.projectService.getAllProjects().subscribe(
      value => {
        this.data.projects = value;
        this.dataObservable.next(this.data);
        console.log("fetched Projects");
      }
    );
  }

  private fetchRoles() {
    this.roleService.getAllRoles().subscribe(
      value => {
        this.data.roles = value;
        this.dataObservable.next(this.data);
        console.log("fetched Roles");
      }
    );
  }

}

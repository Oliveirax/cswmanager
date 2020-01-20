import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee.model';
import { RoleService } from './services/role.service';
import { Role } from './models/role.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public employeeId: number;

  public employee: Employee;

  public employees: Employee[];

  public roles: Role[]

  constructor(private employeeService: EmployeeService, private roleService: RoleService) {
  }

  public getEmployee() {
    this.employeeService.getEmployee(this.employeeId).subscribe(value => this.employee = value, error => alert(error));
  }

  public getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(value => this.employees = value);
  }

  public getAllRoles() {
    this.roleService.getAllRoles().subscribe(value => this.roles = value);
  }
}

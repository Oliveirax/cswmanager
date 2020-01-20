import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { map } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService: HttpClient) {
  }

  public getEmployee(id: number): Observable<Employee> {
    return this.httpService.get<Employee>(`https://my-json-server.typicode.com/Oliveirax/cswmanager/employee/${id}`).pipe(
      map(data => new Employee().deserialize(data)),
      catchError(() => throwError('Employee not found'))
    );
  }

  public getAllEmployees(): Observable<Employee[]> {
    return this.httpService.get<Employee[]>(`https://my-json-server.typicode.com/Oliveirax/cswmanager/employee`).pipe(
      map(data => data.map(data => new Employee().deserialize(data)))
    );
  }
}

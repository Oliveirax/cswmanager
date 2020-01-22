import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})

export class RoleService {

  constructor(private httpService: HttpClient) {
  }

  public getRole(id: number): Observable<Role> {
    return this.httpService.get<Role>(`https://my-json-server.typicode.com/Oliveirax/cswmanager/role/${id}`).pipe(
      map(data => new Role().deserialize(data)),
      catchError(() => throwError('Role not found'))
    );
  }

  public getAllRoles(): Observable<Role[]> {
    return this.httpService.get<Role[]>(`https://my-json-server.typicode.com/Oliveirax/cswmanager/role`).pipe(
      map(data => data.map(data => new Role().deserialize(data)))
    );
  }
}

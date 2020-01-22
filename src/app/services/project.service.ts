import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor(private httpService: HttpClient) {
  }

  public getProject(id: number): Observable<Project> {
    return this.httpService.get<Project>(`https://my-json-server.typicode.com/Oliveirax/cswmanager/project/${id}`).pipe(
      map(data => new Project().deserialize(data)),
      catchError(() => throwError('Project not found'))
    );
  }

  public getAllProjects(): Observable<Project[]> {
    return this.httpService.get<Project[]>(`https://my-json-server.typicode.com/Oliveirax/cswmanager/project`).pipe(
      map(data => data.map(data => new Project().deserialize(data)))
    );
  }
}

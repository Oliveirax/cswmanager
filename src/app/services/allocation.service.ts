import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Allocation } from '../models/allocation.model';

@Injectable({
  providedIn: 'root'
})

export class AllocationService {

  constructor(private httpService: HttpClient) {
  }

  public getAllocation(id: number): Observable<Allocation> {
    return this.httpService.get<Allocation>(`https://my-json-server.typicode.com/Oliveirax/cswmanager/allocation/${id}`).pipe(
      map(data => new Allocation().deserialize(data)),
      catchError(() => throwError('Allocation not found'))
    );
  }

  public getAllAllocations(): Observable<Allocation[]> {
    return this.httpService.get<Allocation[]>(`https://my-json-server.typicode.com/Oliveirax/cswmanager/allocation`).pipe(
      map(data => data.map(data => new Allocation().deserialize(data)))
    );
  }
}

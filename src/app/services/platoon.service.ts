import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Platoon } from '../models/platoon.model';

@Injectable({
  providedIn: 'root'
})

export class PlatoonService {

  constructor(private httpService: HttpClient) {
  }

  public getPlatoon(id: number): Observable<Platoon> {
    return this.httpService.get<Platoon>(`https://my-json-server.typicode.com/Oliveirax/cswmanager/platoon/${id}`).pipe(
      map(data => new Platoon().deserialize(data)),
      catchError(() => throwError('Platoon not found'))
    );
  }

  public getAllPlatoons(): Observable<Platoon[]> {
    return this.httpService.get<Platoon[]>(`https://my-json-server.typicode.com/Oliveirax/cswmanager/platoon`).pipe(
      map(data => data.map(data => new Platoon().deserialize(data)))
    );
  }
}

// A model for all the data. References all the other models

import { Allocation } from './allocation.model';
import { Employee } from './employee.model';
import { Platoon } from './platoon.model';
import { Project } from './project.model';
import { Role } from './role.model';

export class Data {
  public allocations: Allocation[];
  public employees: Employee[];
  public platoons: Platoon[];
  public projects: Project[];
  public roles: Role[];
}

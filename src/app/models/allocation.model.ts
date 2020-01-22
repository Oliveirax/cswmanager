// A model for a project allocation. References an employee and a project

import {Deserializable} from './deserializable.model';

export class Allocation implements Deserializable{
  public id: number;
  public employeeId: number;
  public projectId: number;
  public percentage: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

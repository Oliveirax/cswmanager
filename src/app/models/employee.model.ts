// A model for a user. References a Role and a Platoon

import {Deserializable} from './deserializable.model';

export class Employee implements Deserializable {
  public id: number;
  public name: string;
  public startDate: string;
  public roleId: number;
  public platoonId: number;
  
  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

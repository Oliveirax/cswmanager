// A model for a project allocation. References a user and a project

import {Deserializable} from './deserializable.model';

export class Allocation implements Deserializable{
  public id: number;
  public projectId: number;
  public userId: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

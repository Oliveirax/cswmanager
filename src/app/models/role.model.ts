// A model for a role

import {Deserializable} from './deserializable.model';

export class Role implements Deserializable {
  public id: number;
  public name: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

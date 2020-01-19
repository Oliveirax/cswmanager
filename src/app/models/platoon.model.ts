// A model for a platoon

import {Deserializable} from './deserializable.model';

export class Platoon implements Deserializable {
  public id: number;
  public name: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

// A deserializable interface for our models

export interface Deserializable {
  deserialize(input: any): this;
}

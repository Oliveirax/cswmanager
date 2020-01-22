// A deserializable interface for webservice payload models

export interface Deserializable {
  deserialize(input: any): this;
}

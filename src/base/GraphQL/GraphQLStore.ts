import { makeAutoObservable } from "mobx";

export class GraphQLStore{
  name:string;
  source:string;
  gql?:string;
  variables?:any;

  constructor(name:string, source:string, gql?:string) {
    this.name = name;
    this.source = source;
    this.gql = gql;
    makeAutoObservable(this)
  }
}
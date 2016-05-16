import { Address } from "./address.ts";

export class Person {
  constructor(
    public Id: string,
    public PersonTypes: number[],    
    public LastName: string,
    public FirstName: string,
    public FullName: string,
    public PersonInfos: string[],
    public Addresses: Address[]) { }
}
export class Person {
  constructor(
    public Id:string,
    public LastName:string,
    public FirstName:string,
    public FullName:string,
    public PersonInfos:string[],
    public PersonType: number) { }
}
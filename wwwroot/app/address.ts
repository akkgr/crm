export class Address {
    constructor(
        public AddressType: number,
        public Area: string,
        public Street: string,
        public StreetNumber: string,
        public PostalCode: string,
        public Lat: number,
        public Lng: number,
        public Title: string
    ){}
}
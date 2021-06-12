export interface FlightDataModel {
    data: {
        airports: AirportListModel[];
        passengerType: PassengerTypeModel[];
        classType: ClassTypeModel[];
    }
}

export interface AirportListModel {
    name: string;
    city: string;
    country: string;
}

export interface PassengerTypeModel {
    name: string;
    code: string;
}

export interface ClassTypeModel {
    name: string;
    code: string;
}

export class SearchFlightModel {
    constructor(
        public departure: string,
        public destination: string,
        public departureDate: string,
        public returnDate: string,
        public travellers: TravellersModel,
        public travellerClass: string
    ) { }
}

export interface TravellersModel {
    count: number;
    type: string;
}
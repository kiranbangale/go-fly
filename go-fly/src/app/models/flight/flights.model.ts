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
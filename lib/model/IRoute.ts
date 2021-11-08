export interface IRoute {
    actionPrice: boolean;
    arrivalStationId: number;
    arrivalTime: string;
    bookable: boolean;
    creditPriceFrom: number;
    creditPriceTo: number;
    departureStationId: number;
    departureTime: string;
    freeSeatsCount: number;
    id: string;
    nationalTrip: boolean;
    notices: boolean;
    priceFrom: number;
    priceTo: number;
    pricesCount: number;
    support: boolean;
    surcharge: boolean;
    transfersCount: number;
    travelTime: string;
    vehicleStandardKey: string;
    vehicleTypes: Array<string>;
}
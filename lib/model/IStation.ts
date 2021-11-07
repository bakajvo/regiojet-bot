export interface IStation {
    address: string;
    aliases: Array<string>;
    fullname: string;
    iataCode: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    significance: number;
    stationTimeZoneCode: string;
    stationUrl: string;
    stationsTypes: Array<string>
}
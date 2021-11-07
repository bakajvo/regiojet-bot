import { IStation } from "./IStation";

export interface ICity {
    id: number;
    name: string;
    stationTypes: Array<string>
    stations: Array<IStation>
}
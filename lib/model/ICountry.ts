import { ICity } from "./ICity";

export interface ICountry {
    country: string;
    code: string;
    cities: Array<ICity>;
}
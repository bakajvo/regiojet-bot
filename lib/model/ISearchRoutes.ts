export interface ISearchRoutes extends Record<string, unknown> {
    departureDate: Date;
    tariffs?: string;
    fromLocationId?: number;
    fromLocationType?: string;
    toLocationId?: number;
    toLocationType?: string;
}
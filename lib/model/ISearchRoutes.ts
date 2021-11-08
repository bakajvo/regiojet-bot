export interface ISearchRoutes extends Record<string, unknown> {
    departureDate: Date;
    tariffs?: string;
    fromLocationId?: string;
    fromLocationType?: string;
    toLocationId?: string;
    toLocationType?: string;
}
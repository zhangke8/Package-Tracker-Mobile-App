import { ITrackingLocations } from './trackinglocations';

export interface ITrackingStatus {
    _id: string;
    status: number;
    locationtracker: Array<ITrackingLocations>;
}

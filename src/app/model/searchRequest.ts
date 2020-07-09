export class SearchRequest {
  locationId: string;
  startDate: Date;
  endDate: Date;
  carModelId: string;
  carClassId: string;
  waiver: boolean;
  limitedKms: boolean;
  fuelTypeId: string;
  transmissionId: string;
  kmage: number;
  availableChildSeats: number;
}

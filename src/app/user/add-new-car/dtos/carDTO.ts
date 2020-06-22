export class CarDTO {
  id: string;
  ownerId: string;
  carModelId: string;
  fuelTypeId: string;
  transmissionId: string;
  pricePerDay: number;
  pricePerKm: number;
  limitKmsPerDay: number;
  kmage: number;
  availableChildSeats: number;
  waiver: boolean;
}

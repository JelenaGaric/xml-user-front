export class CarDTO {
  id: string;
  ownerId: string;
  carModelId: string;
  fuelTypeId: string;
  transmissionId: string;
  pricePerDay: number;
  limitedKms: boolean;
  limitKmsPerDay: number;
  pricePerKm: number;
  kmage: number;
  availableChildSeats: number;
  waiver: boolean;
  waiverPricePerDay: number;
}

import {CarBrandDTO} from './carBrandDTO';
import {CarModelDTO} from './carModelDTO';
import {CarClassDTO} from './carClassDTO';
import {FuelTypeDTO} from './fuelTypeDTO';
import {TransmissionDTO} from './transmissionDTO';

export class CodebookDTO {
  carBrandDTOs: CarBrandDTO[];
  carClassDTOs: CarClassDTO[];
  carModelDTOs: CarModelDTO[];
  fuelTypeDTOs: FuelTypeDTO[];
  transmissionDTOs: TransmissionDTO[];
}

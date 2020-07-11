import {Component, OnInit} from '@angular/core';
import {AddNewCarService} from './add-new-car.service';
import {CarDTO} from './dtos/carDTO';
import {CodebookDTOh} from './dtos/codebookDTOh';
import {CarModelDTOh} from './dtos/carModelDTOh';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {
  carDTO: CarDTO;
  codebookDTOh: CodebookDTOh;
  possibleModels: CarModelDTOh[];

  constructor(private addNewCarService: AddNewCarService) {
    this.carDTO = new CarDTO();
    this.codebookDTOh = new CodebookDTOh();
    this.possibleModels = [];
  }

  ngOnInit() {
    this.addNewCarService.getCodebook().subscribe(codebookDTO => {
      console.log(codebookDTO);
      this.codebookDTOh = codebookDTO;
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    this.addNewCarService.postNewCar(this.carDTO).subscribe(car => {
      console.log(car);
      alert('Successfully added a new car.');
    });
  }

  onBrandSelect(brandId: string) {
    // console.log("brandId: " + brandId);
    this.possibleModels = this.codebookDTOh.carModelDTOhs.filter(carModel => carModel.brandId == brandId);
  }
}

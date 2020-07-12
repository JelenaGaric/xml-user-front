import {Component, OnInit} from '@angular/core';
import {AddNewCarService} from './add-new-car.service';
import {CarDTO} from './dtos/carDTO';
import {CodebookDTO} from './dtos/codebookDTO';
import {CarModelDTO} from './dtos/carModelDTO';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {
  carDTO: CarDTO;
  codebookDTO: CodebookDTO;
  possibleModels: CarModelDTO[];

  constructor(private addNewCarService: AddNewCarService) {
    this.carDTO = new CarDTO();
    this.codebookDTO = new CodebookDTO();
    this.possibleModels = [];
  }

  ngOnInit() {
    this.addNewCarService.getCodebook().subscribe(codebookDTO => {
      console.log(codebookDTO);
      this.codebookDTO = codebookDTO;
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedIn'))
    this.carDTO.ownerId = loggedInUser.id;
    this.addNewCarService.postNewCar(this.carDTO).subscribe(car => {
      console.log(car);
      alert('Successfully added a new car.');
    });
  }

  onBrandSelect(brandId: string) {
    // console.log("brandId: " + brandId);
    this.possibleModels = this.codebookDTO.carModelDTOs.filter(carModel => carModel.brandId == brandId);
  }
}

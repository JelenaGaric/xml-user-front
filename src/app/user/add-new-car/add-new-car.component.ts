import {Component, OnInit} from '@angular/core';
import {AddNewCarService} from './add-new-car.service';
import {CarDTO} from './dtos/carDTO';
import {CodebookDTO} from './dtos/codebookDTO';
import {CarModelDTO} from './dtos/carModelDTO';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {
  carDTO: CarDTO;
  codebookDTO: CodebookDTO;
  possibleModels: CarModelDTO[];
  loggedInUser: any;

  constructor(private addNewCarService: AddNewCarService, private router: Router) {
    this.carDTO = new CarDTO();
    this.codebookDTO = new CodebookDTO();
    this.possibleModels = [];
  }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedIn'));
    if (this.loggedInUser === null || this.loggedInUser === undefined) {
      alert('You need to log in for this feature.');
      this.router.navigate(['user']);
    }
    this.addNewCarService.getCodebook().subscribe(codebookDTO => {
      console.log(codebookDTO);
      this.codebookDTO = codebookDTO;
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
    this.possibleModels = this.codebookDTO.carModelDTOs.filter(carModel => carModel.brandId == brandId);
  }
}

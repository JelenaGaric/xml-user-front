import {Component, OnInit} from '@angular/core';
import {AddNewCarService} from '../service/add-new-car.service';
import {CarDTO} from './dtos/carDTO';
import {CodebookDTOh} from './dtos/codebookDTOh';
import {CarModelDTOh} from './dtos/carModelDTOh';
import {Router} from '@angular/router';
import {Location} from '../../model/location';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {
  carDTO: CarDTO;
  codebookDTOh: CodebookDTOh;
  possibleModels: CarModelDTOh[];
  locations: Location[];
  loggedInUser: any;

  selectedFile: File  = null;
  imageUrl: string;

  constructor(private addNewCarService: AddNewCarService, private router: Router) {
    this.carDTO = new CarDTO();
    this.codebookDTOh = new CodebookDTOh();
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
      this.codebookDTOh = codebookDTO;
      this.addNewCarService.getLocatons().subscribe( locations => {
        this.locations = locations;
      });
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    console.log(this.carDTO);
    this.carDTO.advertiserId = this.loggedInUser.id;
    this.carDTO.ownerId = this.loggedInUser.id;
    if (this.carDTO.locationId == null || this.carDTO.transmissionId == null || this.carDTO.fuelTypeId == null || this.carDTO.carModelId == null
      || this.carDTO.pricePerDay == null){
      alert('You need to add information for all fields.');
      return;
    }
    this.addNewCarService.postNewCar(this.carDTO).subscribe(carId => {
      if (this.imageUrl !== '') {
        console.log('retval: ' + carId);
        this.uploadImage(carId.toString());
      } else {
        alert('No image uploaded.');
        return;
      }
      alert('Successfully added an advertisment.');
      this.router.navigate(['/newAd']);

    });
  }
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0] as File;
    this.imageUrl = URL.createObjectURL(event.target.files[0]);
  }

  uploadImage(id: string) {
    const fd = new FormData();
    fd.append('image', this.selectedFile,   id + '-' + this.selectedFile.name);

    this.addNewCarService.uploadImage(fd).subscribe(event => {
      console.log(event);
    });
  }

  onBrandSelect(brandId: string) {
    // console.log("brandId: " + brandId);
    this.possibleModels = this.codebookDTOh.carModelDTOhs.filter(carModel => carModel.brandId == brandId);
  }
}

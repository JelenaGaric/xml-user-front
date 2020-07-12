import { Component, OnInit } from '@angular/core';
import { AddNewCarService } from 'src/app/user/add-new-car/add-new-car.service';

@Component({
  selector: 'app-codebook-list',
  templateUrl: './codebook-list.component.html',
  styleUrls: ['./codebook-list.component.css']
})
export class CodebookListComponent implements OnInit {
  codebook:any;

  constructor(private service: AddNewCarService) { }

  ngOnInit(): void {

    this.service.getCodebook().subscribe( codebook => {
      console.log(codebook);
      this.codebook = codebook;
    });
  }

}

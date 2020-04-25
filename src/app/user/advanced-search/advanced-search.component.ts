import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  fuelTypes: any[] = [
    {
      id: 1,
      name: 'Benzin'
    },
    {
      id: 2,
      name: 'Plin'
    },
    {
      id: 3,
      name: 'Dizel'
    }
  ];

  transmissionTypes: any[] = [
    {
      id: 1,
      name: 'Manuelni'
    },
    {
      id: 2,
      name: 'Automatski'
    },
    {
      id: 3,
      name: 'Poluautomatski'
    }
  ];


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

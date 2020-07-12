import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/model/agent';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { CompanyListService } from 'src/app/services/admin-service/company-list.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  agents: Agent[] = [];
  agent: Agent;
  deleteAgent: Agent;

  constructor(private router: Router, private agentListService: CompanyListService, 
              private modalService: NgbModal, 
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllAgents();
  }

  getAllAgents() {
    this.agentListService.getAllAgents()
      .subscribe( data => {
        this.agents = data;
      });
  }
 
  unblock(id) {

  }
 
  block(id) {

  }
 
  delete() {

  }

  deleteModal(component, agent){

  }
  
}

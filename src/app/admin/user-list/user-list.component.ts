import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserListService } from 'src/app/services/admin-service/user-list.service';
import { UserDTO } from 'src/app/model/userDTO';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users: User[] = [];
  user: User;
  userDelete: UserDTO;
  closeResult: string;
  
  constructor(private userListService: UserListService,
              private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userListService.getAllUsers()
      .subscribe( data => {
        this.users = data;
    }); 
  }

  block(id) {
    for (let u of this.users) {
      if(u.id === id)
        this.user = u;
    }
    this.userListService.block(this.user)
      .subscribe( data => {
        this.ngOnInit;
      });
  }

  unblock(id) {
    for (let u of this.users) {
      if(u.id === id)
        this.user = u;
    }
    this.userListService.unblock(this.user)
      .subscribe( date => {
        this.ngOnInit;
      });
  }

  deleteUser() {
    console.log(this.userDelete);
    this.userListService.delete(this.userDelete)
      .subscribe( date => {
        this.ngOnInit;
      });
  }

  deleteModal(content,user) {
    this.userDelete = user;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } 
    
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'app/login/login.component';
import { forwardRef } from '@angular/core';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';

@Component({
    selector: 'login-modal-content',
    template: `
    {{this.mode}}
    <div id="modalRegister" class="modal-header no-border-header">
        <h5 class="modal-title text-center">  </h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div  class="modal-body">
        <app-login id="divRegister"></app-login>
    </div>
    `
})
export class LoginModalContent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'login-modal-component',
    templateUrl: './modal-login.component.html'
})
export class LoginModalComponent implements OnInit {
    
    
    
    
    
    
    ngOnInit(): void { }

    constructor(private modalService: NgbModal) {}

    open() {
        const modalRef = this.modalService.open(LoginModalContent);
        modalRef.componentInstance.name = 'World';
    }

    
    
}
import {Component, Input, OnInit, Output, ViewChild, AfterViewInit, ViewChildren} from '@angular/core';
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
export class LoginModalComponent implements OnInit, AfterViewInit {
    @Input()
    private id : string;
    @ViewChildren(forwardRef(() => LoginComponent)) 
    private loginComponent;
    
    _mode: string = "Login";
    
    ngAfterViewInit() {
        this._mode = this.loginComponent.modeOutput;    
    }

    ngOnInit(): void { this._mode='Login' }

    constructor(private modalService: NgbModal) {}

    open() {
        const modalRef = this.modalService.open(LoginModalContent);
        modalRef.componentInstance.name = 'World';
    }

    close() {
        
        document.getElementById(this.id).click();
    }
    
}


import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'login-modal-content',
    template: `
    <div class="modal-header no-border-header">
        <h5 class="modal-title text-center">  </h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <app-login></app-login>
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
export class LoginModalComponent {
    @Input()
    islog : boolean;
    
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(LoginModalContent);
        modalRef.componentInstance.name = 'World';
    }
}


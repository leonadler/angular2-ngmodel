import {Component} from 'angular2/core';
import {Customer, exampleCustomers} from './customer';
import {CustomerEditor} from './customer-editor';

@Component({
    selector: 'customer-list',
    // TODO: [(ngModel)]="customer"
    template: `
        <div class="customer-list">
            <customer-editor
                *ngFor="#customer of customers"
                [customer]="customer">
            </customer-editor>
        </div>`,
    directives: [CustomerEditor]
})
export class CustomerList {
    private customers: Customer[];

    constructor() {
         this.customers = exampleCustomers.slice();
    }
}

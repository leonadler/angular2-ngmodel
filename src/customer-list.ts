import {Component} from 'angular2/core';
import {Customer, exampleCustomers} from './customer';
import {CustomerEditor, CustomerValueAccessor} from './customer-editor';

@Component({
    selector: 'customer-list',
    template: `
        <div class="customer-list">
            <customer-editor
                *ngFor="#customer of customers; #i = index"
                [(ngModel)]="customers[i]">
            </customer-editor>
        </div>`,
    directives: [CustomerEditor, CustomerValueAccessor]
})
export class CustomerList {
    private customers: Customer[];

    constructor() {
         this.customers = exampleCustomers.slice();
    }
}

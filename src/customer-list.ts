import {Component} from 'angular2/core';
import {Customer, exampleCustomers} from './customer';
import {CustomerEditor} from './customer-editor';

@Component({
    selector: 'customer-list',
    template: `
        <h2>All customers:</h2>
        <ul>
            <li *ngFor="#customer of customers">
                {{customer.name}} ({{customer.company}})
            </li>
        </ul>
        <hr>
        <div class="customer-list">
            <customer-editor
                *ngFor="#customer of customers; #i = index"
                [(ngModel)]="customers[i]">
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

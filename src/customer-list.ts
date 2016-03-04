import {Component} from 'angular2/core';
import {Customer, exampleCustomers} from './customer';
import {CustomerEditor} from './customer-editor';

@Component({
    selector: 'customer-list',
    template: `
        <h2>One customer:</h2>
        <customer-editor
            [(ngModel)]="customers[customerIndex]">
        </customer-editor>

        <button (click)="customerIndex = 0">Select Barack O.</button>
        <button (click)="customerIndex = 1">Select Angela M.</button>

        <hr>

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
    private customerIndex: number = 0;

    constructor() {
         this.customers = exampleCustomers.slice();
    }
}

import {Component, Input} from 'angular2/core';
import {Customer} from './customer';
import {CustomerValueAccessor} from './customer-value-accessor';
export {CustomerValueAccessor} from './customer-value-accessor';

@Component({
    selector: 'customer-editor',
    template: `
        <div>
            <p>Customer editor for {{customer?.name}}:</p>
            <blockquote *ngIf="customer">
                Name: <input [(ngModel)]="customer.name"><br>
                Company: <input [(ngModel)]="customer.company"><br>

                <div *ngIf="customer.phoneNumbers?.length >= 2">
                    Phone numbers:
                </div>
                <ul>
                    <li *ngFor="#phone of customer.phoneNumbers; #n = index">
                        Phone: <input
                            [(ngModel)]="customer.phoneNumbers[n]"
                            placeholder="Phone No.">
                    </li>
                </ul>

                <div *ngIf="customer.adresses?.length >= 2">
                    Addresses:
                </div>
                <ul>
                    <li *ngFor="#address of customer.addresses; #n = index">
                        <input [(ngModel)]="customer.addresses[n].street"><br>
                        <input [(ngModel)]="customer.addresses[n].zipcode" size="4">
                            <input [(ngModel)]="customer.addresses[n].city" size="11"><br>
                        <input [(ngModel)]="customer.addresses[n].country">
                    </li>
                </ul>

            </blockquote>
        </div>
    `,
    directives: [CustomerValueAccessor]
})
export class CustomerEditor {
    @Input() customer: Customer;

    setCustomer(customer: Customer): void {
        this.customer = customer;
    }
}


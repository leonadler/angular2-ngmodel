import {Component, Input} from 'angular2/core';
import {Customer} from './customer';
import {CustomerValueAccessor} from './customer-value-accessor';
export {CustomerValueAccessor} from './customer-value-accessor';

@Component({
    selector: 'customer-editor',
    template: `
        <div>
            <p>Customer editor here</p>
            <blockquote *ngIf="customer">
                Name: {{customer.name}}<br>
                Company: {{customer.company}}<br>
                <div *ngIf="customer.phoneNumbers.length > 0">
                    Phone numbers:<br />
                    <ul>
                        <li *ngFor="#phone of customer.phoneNumbers">
                            Number: {{phone}}
                        </li>
                    </ul>
                </div>
                <div *ngIf="customer.addresses.length > 0">
                    Addresses:<br />
                    <ul>
                        <li *ngFor="#address of customer.addresses">
                            Address:<br>
                            {{address.street}}<br>
                            {{address.zipcode}} {{address.city}}<br>
                            {{address.country}}
                        </li>
                    </ul>
                </div>
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


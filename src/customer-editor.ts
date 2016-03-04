import {Component, Input, Provider, forwardRef} from 'angular2/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from 'angular2/common';
import {CONST_EXPR} from 'angular2/src/facade/lang';
import {Customer} from './customer';

const CUSTOMER_VALUE_ACCESSOR: Provider = CONST_EXPR(
    new Provider(NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => CustomerEditor),
        multi: true
    })
);

@Component({
    selector: 'customer-editor',
    template: `
        <div>
            <p>Edit {{customer.name}}:</p>
            <blockquote *ngIf="customer">
                Name: <input [(ngModel)]="customer.name"><br>
                Company: <input [(ngModel)]="customer.company"><br>

                <div *ngIf="customer.phoneNumbers?.length >= 2">
                    Phone numbers:
                </div>
                <ul>
                    <li *ngFor="#phone of customer.phoneNumbers; #n = index">
                        Phone: <input [value]="customer.phoneNumbers[n]"
                            (change)="customer.phoneNumbers[n] = $event.target.value"
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
    providers: [CUSTOMER_VALUE_ACCESSOR]
})
export class CustomerEditor implements ControlValueAccessor {
    customer: Customer;

    onChange: Function = () => {};
    onTouched: Function = () => {};
    writeValue(customer: any): void {
        this.customer = customer;
    }

    registerOnChange(fn: Function): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onTouched = fn;
    }
}


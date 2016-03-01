import {Component, Input} from 'angular2/core';
import {Customer} from './customer';

@Component({
    selector: 'customer-editor',
    template: `
        <div>
            <p>Customer editor here</p>
            <blockquote>
                name: {{customer.name}}
            </blockquote>
        </div>
    `
})
export class CustomerEditor {
    @Input() customer: Customer;
}

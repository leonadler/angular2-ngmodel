import {Component} from 'angular2/core';
import {TwoWayComponent} from './two-way-component';

@Component({
    selector: 'two-way-binding-test',
    template: `
        <p>Test for two-way attribute bindings:</p>
        <p>
            <two-way-component [(test)]="testValue"></two-way-component>
        </p>
        <p>Double-bound value (updates after pressing enter): {{testValue}}</p>
        <hr>
    `,
    directives: [TwoWayComponent]
})
export class TwoWayBindingTest {
    testValue: string = '';
}


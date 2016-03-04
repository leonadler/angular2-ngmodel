import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {CustomerList} from './customer-list';
import {RadioButtonTest} from './radiobutton-test';
import {TwoWayBindingTest} from './two-way-test';

@Component({
    selector: 'app',
    template: `
        <h1>Demo App</h1>
        <two-way-binding-test></two-way-binding-test>
        <radio-button-test></radio-button-test>
        <customer-list></customer-list>
    `,
    directives: [FORM_DIRECTIVES, CustomerList, RadioButtonTest, TwoWayBindingTest]
})
class App { }

bootstrap(App);

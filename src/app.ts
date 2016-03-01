import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {CustomerList} from './customer-list';

@Component({
    selector: 'app',
    template: `
        <h1>Demo App</h1>
        <customer-list></customer-list>
    `,
    directives: [FORM_DIRECTIVES, CustomerList]
})
class App { }

bootstrap(App);

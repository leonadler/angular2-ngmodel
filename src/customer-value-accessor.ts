import {Directive, Provider, Injectable, ElementRef, AppViewManager, forwardRef} from 'angular2/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from 'angular2/common';
import {CONST_EXPR} from 'angular2/src/facade/lang';

import {CustomerEditor} from './customer-editor';

const CUSTOMER_VALUE_ACCESSOR: Provider = CONST_EXPR(
    new Provider(NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => CustomerValueAccessor),
        multi: true
    })
);

/* Customer Value Accessor below, which SHOULD make [(ngModel)]=... work! */

@Directive({
    selector: 'customer-editor[ngControl], customer-editor[ngFormControl], customer-editor[ngModel]',
    host: {
        // '(input)': 'onChange($event.target.value)',
        // '(blur)': 'onTouched()'
    },
    providers: [CUSTOMER_VALUE_ACCESSOR]
})
@Injectable()
export class CustomerValueAccessor implements ControlValueAccessor {
    onChange: Function = () => {};
    onTouched: Function = () => {};
    private host: CustomerEditor;

    // // does not work :'(
    // constructor(@Optional() private host: CustomerEditor) { }

    constructor(element: ElementRef, viewManager: AppViewManager) {
        let hostComponent: any = viewManager.getComponent(element);
        if (hostComponent instanceof CustomerEditor) {
            this.host = hostComponent;
        }
    }

    writeValue(value: any): void {
        if (this.host) {
            this.host.setCustomer(value);
        }
    }

    registerOnChange(fn: Function): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onTouched = fn;
    }
}

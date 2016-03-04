import {Component, Input, Provider, forwardRef} from 'angular2/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from 'angular2/common';
import {CONST_EXPR} from 'angular2/src/facade/lang';


const RADIO_VALUE_ACCESSOR: Provider = CONST_EXPR(
    new Provider(NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => RadioButton),
        multi: true
    })
);

@Component({
    selector: 'radio-button',
    template: `
        <label [attr.for]="id">
            <input
                type="radio"
                [attr.id]="id"
                [attr.name]="name"
                (change)="checkedChanged()"
                [checked]="checked"
            >
            <span *ngIf="label">{{label}}</span>
        </label>`,
    providers: [RADIO_VALUE_ACCESSOR]
})
export class RadioButton implements ControlValueAccessor {
    @Input() label: string = null;
    @Input() name: string = null;
    @Input() value: any;
    checked: boolean = false;

    onChange: Function = () => {};
    onTouched: Function = () => {};

    checkedChanged(): void {
        this.onChange(this.value);
    }

    writeValue(value: any): void {
        this.checked = (value === this.value);
    }

    registerOnChange(fn: Function): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onTouched = fn;
    }
}


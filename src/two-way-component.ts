import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'two-way-component',
    template: `
        <label>Two-way component:
            <input
                type="text"
                [value]="lazyValue"
                (keydown.enter)="enterPressed($event.target.value)">
        </label>`
})
export class TwoWayComponent {
    @Input('test') lazyValue: string = '';
    @Output() testChange: EventEmitter<string> = new EventEmitter();

    onChange: Function = () => {};
    onTouched: Function = () => {};

    enterPressed(text: string) {
        this.testChange.emit(text);
    }
}


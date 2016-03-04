import {Component} from 'angular2/core';
import {RadioButton} from './radiobutton';

@Component({
    selector: 'radio-button-test',
    template: `
        <h2>Radio buttons:</h2>
        <p>Selected: {{selectedColor?.name}}</p>
        <radio-button
            *ngFor="#color of colors; #n = index"
            name="{{inputName}}"
            [id]="'color-' + colors[n].id"
            [label]="colors[n].name"
            [(ngModel)]="selectedColor"
            [value]="colors[n]"
        ></radio-button>

        <hr>

        <button
            *ngFor="#color of colors; #n = index"
            (click)="selectedColor = colors[n]"
        >Select color {{colors[n].id}}</button>
        `,
    directives: [RadioButton]
})
export class RadioButtonTest {
    private inputName: string;
        private selectedColor: any;
    private colors: any[] = [
        {
            id: 'red',
            name: 'Red',
            hex: 'ff0000'
        },
        {
            id: 'blue',
            name: 'Blue',
            hex: '00ff00'
        },
        {
            id: 'green',
            name: 'Green',
            hex: '0000ff'
        },
        {
            id: 'cyan',
            name: 'Cyan',
            hex: '00cccc'
        }
    ];
    private static lastID: number = 0;

    constructor() {
         this.inputName = 'radio-button-test-' + (++RadioButtonTest.lastID);
    }
}

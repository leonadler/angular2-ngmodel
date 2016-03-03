# angular2-ngModel

Example application for `[(ngModel)]` bindings on custom elements.

## What use-case example repository shows

In many angular2 examples, `[(ngModel)]` is used to bind a *`string`* value to an input element:

```TypeScript
@Component({
    template: 'Hello <input type="text" [(ngModel)]="myVariable">!'
})
class ExampleComponent() {
    myVariable: string = 'World';
}
```

But what if we don't want to bind a *`string`*, but any other arbitrary Type?  
Let's say we have an editor component for a nested data structure like this:

```TypeScript
interface Customer {
    name: string;
    company: string;
    phoneNumbers: string[];
    addresses: Address[];
}
```

How can this data be passed to the editor component like this?:

```html
<customer-editor [(ngModel)]="currentEditingCustomer"></customer-editor>
```

The solution lies in the `ControlValueAccessor` interface, which this repo showcases. 

## License

[MIT](https://opensource.org/licenses/MIT)

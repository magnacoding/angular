import { Component, PipeTransform } from 'angular2/core';

@Component ({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html'
})
export class ContactFormComponent {
    onSubmit(form) {
        console.log(form);
    }
}
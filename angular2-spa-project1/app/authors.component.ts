import { AuthorService } from './author.service';
import { Component } from 'angular2/core';

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{title}}
        <ul>
           <li *ngFor="#author of listOfAuthors">
           {{author}}
           </li>
        </ul>
    `,
    providers: [AuthorService] 
})
export class AuthorComponent {
    title = "This is the list of authors";
    listOfAuthors;

    constructor(authorsService: AuthorService) {
        this.listOfAuthors = authorsService.getAuthors();
    }
}
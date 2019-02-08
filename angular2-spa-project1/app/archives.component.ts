import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    template: `
        <h1>Home Page</h1>
        <ul>
            <li *ngFor="#archive of archives">
                <a [routerLink]="['Archive', { year: archive.year, month: archive.month }]">
                    {{ archive.year }}/{{ archive.month }}
                </a>
            </li> 
        </ul>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class ArchivesComponent implements OnInit {

    archives;

    ngOnInit(){
        this.archives = [
            { year: 2016, month: 1 },
            { year: 2016, month: 2 },
            { year: 2016, month: 3 }
        ];
    }
}
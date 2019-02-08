import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PhotoService} from './photo.service';
import {RouteParams} from 'angular2/router'

@Component({
    template: `
        <h1>Archive</h1>
        <ul>
            <li>
                {{year}} / {{month}}
            </li> 
        </ul>
    `,
    providers: [PhotoService, HTTP_PROVIDERS]
})
export class ArchiveComponent implements OnInit {

    year;
    month;

    constructor(
        private _routeParams: RouteParams){
    }

    ngOnInit(){
            this.year = this._routeParams.get("year");
            this.month = this._routeParams.get("month");
    }
}
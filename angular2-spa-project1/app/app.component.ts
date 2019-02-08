import {Component} from 'angular2/core';
import {NavBarComponent} from "./navbar.component";

// @RouteConfig([
//     { path: '/', name: 'Archives', component: ArchivesComponent, useAsDefault: true },
//     { path: '/archive/:year/:month', name: 'Archive', component: ArchiveComponent },
//     { path: '/*other', name: 'Other', redirectTo: ['Archives'] }
// ])
@Component({
    selector: 'my-app',
    template: '<navbar></navbar>',
    directives: [NavBarComponent]
})
export class AppComponent {
}
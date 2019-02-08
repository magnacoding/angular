import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'like',
    template: `
        <i 
            class="glyphicon glyphicon-heart"
            [class.highlighted]="iLike"
            (click)="onClick($event)">
        </i>
        <span>{{totalLikes}}</span> 
        `,
    styles: [`
        .glyphicon-heart {
            color: #CCC;
            cursor:pointer
        }
        .highlighted {
            color: deeppink;
        }
    `]
})
export class LikeComponent {
    @Input() totalLikes = 0;
    @Input() iLike = false;

    onClick($event) {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }
}
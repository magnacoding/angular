import { AutoGrowDirective } from './auto-grow.directive';
import { CourseService } from './course.service';
import { Component } from 'angular2/core';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" autoGrow />
        <ul>
           <li *ngFor="#course of listOfCourses">
           {{course}}
           </li>
        </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = "This is the list of courses";
    listOfCourses;

    constructor(coursesService: CourseService) {
        this.listOfCourses = coursesService.getCourses();
    }
}
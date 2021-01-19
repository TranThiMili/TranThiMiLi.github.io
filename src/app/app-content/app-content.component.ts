import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-content',
    templateUrl: './app-content.component.html',
    styleUrls: ['./app-content.component.scss']
})
export class ContentComponent {


    constructor(private router: Router, private activeRoute: ActivatedRoute) {


    }

    goToDetail() {
        this.router.navigate(['/detail'])
    }
}
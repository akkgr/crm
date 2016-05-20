import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import { RouteParams, Router } from '@angular/router-deprecated';

import { Person }              from './person';
import { PeopleService }       from './people.service';

@Component({
    selector: 'people',
    templateUrl: 'views/people.html'
})
export class PeopleComponent implements OnInit {

    constructor(
        private router: Router,
        private routeParams: RouteParams,
        private peopleService: PeopleService) { }
    errorMessage: string;
    people: Person[];

    isOn = false;
    sideBarToggle(val) {
        this.isOn = val;
    }

    ngOnInit() { this.getPeople(); }

    getPeople() {
        this.peopleService.getPeople()
            .subscribe(
            people => this.people = people,
            error => this.errorMessage = <any>error);
    }

    addPerson() {
        this.router.navigate(['Contact', { id: "new" }]);
    }

    editPerson(id: string) {
        this.router.navigate(['Contact', { id: id }]);
    }
}
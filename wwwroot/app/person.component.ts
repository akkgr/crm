import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import { RouteParams, Router } from '@angular/router-deprecated';

import { Person }              from './person';
import { PeopleService }       from './people.service';

@Component({
    selector: 'people',
    templateUrl: 'views/person.html'
})
export class PersonComponent implements OnInit {

    constructor(
        private router: Router,
        private routeParams: RouteParams,
        private peopleService: PeopleService) { }
    errorMessage: string;
    people: Person[];
    person: Person;

    isOn = false;
    sideBarToggle(val) {
        this.isOn = val;
    }

    ngOnInit() {
        let id = this.routeParams.get('id');
        this.getPerson(id); 
    }

    getPerson(id: string) {
        this.peopleService.getPerson(id)
            .subscribe(
            person => this.person = person,
            error => this.errorMessage = <any>error);
    }

    addPerson(name: string) {
        if (!name) { return; }
        this.peopleService.addPerson(name)
            .subscribe(
            person => this.people.push(person),
            error => this.errorMessage = <any>error);
    }
}
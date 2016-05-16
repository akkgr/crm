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
    person: Person = { Id: "", LastName: "", FirstName: "", FullName: "", PersonInfos: [], PersonType: 0 };

    isOn = false;
    sideBarToggle(val) {
        this.isOn = val;
    }

    ngOnInit() {
        let id = this.routeParams.get('id');
        if (id === "new") {
            this.person = new Person("", "", "", "", [], 0);
        } else {
            this.getPerson(id);
        }
    }

    getPerson(id: string) {
        this.peopleService.getPerson(id)
            .subscribe(
            person => this.person = person,
            error => this.errorMessage = <any>error);
    }

    savePerson() {
        if (!this.person.Id) {
            this.peopleService.addPerson(this.person)
                .subscribe(
                person => this.gotoList(person),
                error => this.errorMessage = <any>error);
        } else {
            this.peopleService.updatePerson(this.person)
                .subscribe(
                person => this.gotoList(person),
                error => this.errorMessage = <any>error);
        }
    }

    deletePerson() {
        this.peopleService.deletePerson(this.person.Id)
            .subscribe(
            person => this.gotoList(person),
            error => this.errorMessage = <any>error);
    }

    private gotoList(person: Person) {
        this.person = person;
        this.router.navigate(['Contacts']);
    }
}
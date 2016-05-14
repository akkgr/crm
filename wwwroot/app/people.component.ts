import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Person }              from './people';
import { PeopleService }       from './people.service';

@Component({
    selector: 'people',
    templateUrl: 'views/people.html'
})
export class PeopleComponent {

    constructor(private peopleService: PeopleService) { }
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

    addPerson(name: string) {
        if (!name) { return; }
        this.peopleService.addPerson(name)
            .subscribe(
            person => this.people.push(person),
            error => this.errorMessage = <any>error);
    }
}
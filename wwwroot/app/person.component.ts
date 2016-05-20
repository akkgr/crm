/// <reference path="jquery.d.ts" />

import {Component, OnInit, ViewChild} from '@angular/core';
import {NgClass} from '@angular/common';
import { RouteParams, Router } from '@angular/router-deprecated';

import { Person }              from './person';
import { PeopleService }       from './people.service';
import { AddressesComponent }  from './addresses.component';

@Component({
    selector: 'people',
    templateUrl: 'views/person.html',
    directives: [AddressesComponent]
})
export class PersonComponent implements OnInit {
    @ViewChild('select') selectElRef;

    constructor(
        private router: Router,
        private routeParams: RouteParams,
        private peopleService: PeopleService) { }

    errorMessage: string;

    personTypes = [
        { value: 1, name: "Employee" },
        { value: 2, name: "Contact" },
        { value: 3, name: "Customer" },
        { value: 4, name: "Provider" },
        { value: 5, name: "Partner" }];

    person: Person = {
        Id: "",
        LastName: "",
        FirstName: "",
        FullName: "",
        PersonInfos: [],
        PersonTypes: [],
        Addresses: []
    };

    isOn = false;
    sideBarToggle(val) {
        this.isOn = val;
    }

    ngOnInit() {
        let id = this.routeParams.get('id');
        if (id === "new") {
            this.person = new Person("", [], "", "", "", [], []);
        } else {
            this.getPerson(id);
        }        
    }
    
    updateOptions() {        
        let options = this.selectElRef.nativeElement.options;
        for (let i = 0; i < options.length; i++) {
            options[i].selected = this.person.PersonTypes.indexOf(parseInt(options[i].value)) > -1;
        }        
        $('#select').selectpicker();
    }

    change(options) {
        this.person.PersonTypes = Array.apply(null, options)
            .filter(option => option.selected)
            .map(option => option.value)
    }

    getPerson(id: string) {
        this.peopleService.getPerson(id)
            .subscribe(
            person => {this.person = person; this.updateOptions(); },
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
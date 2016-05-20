import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FORM_DIRECTIVES, NgClass} from '@angular/common';
import { Address }                from './address';

@Component({
    selector: 'addresses',
    directives: [FORM_DIRECTIVES, NgClass],
    templateUrl: 'views/addresses.html'
})
export class AddressesComponent {

    @Input() list: Address[];
    @Output() listChange: EventEmitter<Address[]> = new EventEmitter<Address[]>();
    constructor() {
    }


    addAddress() {
        this.list.push(new Address(1, "", "", "", "", 0, 0, ""));
    }

    deleteAddress(address: Address) {
        var index = this.list.indexOf(address, 0);
        if (index > -1) {
            this.list.splice(index, 1);
        }
    }
}
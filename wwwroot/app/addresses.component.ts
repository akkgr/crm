import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FORM_DIRECTIVES, NgClass} from '@angular/common';
import {Address} from './address.ts';

@Component({
    selector: 'addresses',
    directives: [FORM_DIRECTIVES, NgClass],
    templateUrl: 'views/addresses.html'
})
export class AddressesComponent {
    
    @Input() list: Address[];
    @Output() listChange:EventEmitter<Address[]> = new EventEmitter<Address[]>();
    constructor() {     
    }
}
import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'my-first',
    templateUrl: 'views/first.html'
})
export class FirstComponent { 
    isOn = false;
    sideBarToggle(val) {
        this.isOn = val;
    }
}
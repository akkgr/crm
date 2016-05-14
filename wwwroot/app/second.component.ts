import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'my-second',
    templateUrl: 'views/second.html'
})
export class SecondComponent { 
    isOn = false;
    sideBarToggle(val) {
        this.isOn = val;
    }
}
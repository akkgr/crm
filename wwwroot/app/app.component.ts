import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import {BreadcrumbComponent} from './breadcrumb';

@Component({
    selector: 'my-app',
    templateUrl: 'views/main.html',
    directives: [ROUTER_DIRECTIVES, BreadcrumbComponent],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/first',
    name: 'First',
    component: FirstComponent,
    useAsDefault: false
  },
  {
    path: '/second',
    name: 'Second',
    component: SecondComponent,
    useAsDefault: false
  }
])
export class AppComponent { 
            
    public routeConfig: String[];

constructor() {
    // Read the RouteConfig annotation so we can pass it to the breadcrumb component
    // let annotations = Reflect.getOwnMetadata('annotations', MyComponent);
    // for (let i = 0; i < annotations.length; i += 1) {
    //     if (annotations[i].constructor.name === 'RouteConfig') {
    //         this.routeConfig = annotations[i].configs;
    //     }
    // }
}
}
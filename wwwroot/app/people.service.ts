import * as toastr from "toastr";
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Person }           from './person';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PeopleService {
  constructor(private http: Http) { }

  private peopleUrl = 'api/people';  // URL to web API

  getPeople(): Observable<Person[]> {
    return this.http.get(this.peopleUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get(this.peopleUrl + "/" + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addPerson(person: Person): Observable<Person> {
    let body = JSON.stringify(person);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.peopleUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updatePerson(person: Person): Observable<Person> {
    let body = JSON.stringify(person);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.peopleUrl + "/" + person.Id, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deletePerson(id: string) {
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.peopleUrl + "/" + id, options)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead    
    return Observable.throw(errMsg);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

@Injectable()
export class HttpService {

  baseURL = 'http://10.192.182.197:5000/api/';

  private userID: string;
  private userName: string;

  constructor(private http: HttpClient) {
  }

  public httpPost(path: string, body: any): Observable<any> {
    console.log('New post request');
    console.log(this.baseURL + path);
    console.log(body);
    return this.http
    .post(this.baseURL + path, body);
  }

  public signedIn(userID: string, userName: string) {
    this.userID = userID;
    this.userName = userName;
    const body = {
      userID: userID,
      userName: userName,
      eventsAssisted: [],
      eventsInterested: [],
      score: 0,
      tags: ['puppies', 'elderly', 'food']
    };
    return this.httpPost('users/create_user/', body).subscribe(
      (value) => {
        console.log(value);
      }
    );
  }

  public updateInterested(eventID: string) {
    const body = {
      userID: this.userID,
      eventID: eventID,
      userName: this.userName
    };
    return this.httpPost('users/update_interested/', body);
  }

  public updateCheckIn(eventID: string) {
    const body = {
      userID: this.userID,
      eventID: eventID,
      userName: this.userName
    };
    return this.httpPost('events/checkin/', body);
  }

  public updateTags(tags: any[]) {
    const body = {
      userID: this.userID,
      tags: tags
    };
    return this.httpPost('users/update_tags/', body).subscribe(
      (value) => {
        console.log(value);
      }
    );
  }
  public eventsAssisted() {
    const body = {
      userID: this.userID
    };
    return this.httpPost('users/events_assisted/', body).subscribe(
      (value) => {
        console.log(value);
      }
    );
  }
  public eventsInterested(eventID: string) {
    const body = {
      userID: this.userID
    };
    return this.httpPost('users/events_interested/', body).subscribe(
      (value) => {
        console.log(value);
      }
    );
  }
  public eventsSearching(word: string) {
    const body = {
      userID: this.userID,
      word: word
    };
    return this.httpPost('events/events_search', body).subscribe(
      (value) => {
        console.log(value);
      }
    );
  }

  createEvent(event) {
    event.creatorID = this.userID;
    event.creatorName = this.userName;
    return this.httpPost('events/create_event/', event);
  }

  getFeed() {
    const body = {
      userID: this.userID,
      timestamp: new Date().getTime(),
      latitude: 29.651634,
      longitude: -82.324826
    };
    return this.httpPost('events/feed/', body);
  }

  getProfile() {
    const body = {
      userID: this.userID
    };
    return this.httpPost('users/profile/', body);
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PopupService {
  private createEventSubject = new Subject<any>();

  constructor() {
    this.setPopupVisibility(true);
  }

  getObservable(): Observable<any> {
    return this.createEventSubject.asObservable();
  }

  setPopupVisibility(visible: boolean) {
    this.createEventSubject.next(visible);
  }

}

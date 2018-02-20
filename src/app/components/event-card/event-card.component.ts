import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../http.service';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() event: any;
  @Input() small = false;
  state = 'nothing';
  @Output() update: EventEmitter<null> = new EventEmitter();

  constructor(private http: HttpService, private auth: AuthService) { }

  ngOnInit() {
    if (this.event.usersAttended.indexOf(this.auth.getUser().uid) >= 0) {
      this.state = 'attended';
    } else if (this.event.usersInterested.indexOf(this.auth.getUser().uid) >= 0) {
      this.state = 'interested';
    } else {
      this.state = 'nothing';
    }
  }

  updateInterest() {
    this.http.updateInterested(this.event._id).subscribe((value) => {
      this.update.emit();
    });
    this.state = 'interested';
    const user = this.auth.getUser();
    this.event.usersInterested.push({userID: user.uid, userName: user.displayName});
  }

  updateCheckin() {
    this.http.updateCheckIn(this.event._id).subscribe((value) => {
      this.update.emit();
    });
    this.state = 'attended';
    const user = this.auth.getUser();
    this.event.usersAttended.push({userID: user.uid, userName: user.displayName});
  }

}

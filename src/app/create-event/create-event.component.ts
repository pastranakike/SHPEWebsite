import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PopupService } from '../popup.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  show = false;
  latitude = 31.6475473;
  longitude = -76.3436095;
  time = '17:30';
  name = 'Name';
  tags = 'tag1, tag2';
  date = '2018-25-01';
  duration = 60;
  description = 'Description';
  imageURL: '';
  volunteersNeeded: number;
  @Output() update: EventEmitter<null> = new EventEmitter();

  constructor(private popup: PopupService, private http: HttpService) { }

  ngOnInit() {
    this.popup.getObservable().subscribe((value) => {
      this.show = value;
    });
  }

  discard() {
    this.popup.setPopupVisibility(false);
    this.time = '17:30';
    this.name = '';
    this.tags = '';
    this.date = '2018-25-01';
    this.duration = 60;
    this.description = '';
    this.imageURL = '';
  }

  sendEvent() {
    const event = {
      latitude: this.longitude,
      longitude: this.latitude,
      time: this.duration * 60000,
      name: this.name,
      tags: this.tags === '' ? [] : this.tags.replace(' ', '').split(','),
      timestamp: new Date(this.date + ' ' + this.time).getTime(),
      usersAttended: [],
      usersInterested: [],
      description: this.description,
      imageURL: this.imageURL,
      volunteersNeeded: this.volunteersNeeded
    };

    this.http.createEvent(event).subscribe((value) => {
      console.log(value);
      this.discard();
      this.update.emit();
    });
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events-row',
  templateUrl: './events-row.component.html',
  styleUrls: ['./events-row.component.css']
})
export class EventsRowComponent implements OnInit {
  @Input() events: any[];
  @Input() title: string;
  @Input() small = false;
  @Output() update: EventEmitter<null> = new EventEmitter();

  constructor() {
    console.log(this.update);
  }

  ngOnInit() {
  }

}

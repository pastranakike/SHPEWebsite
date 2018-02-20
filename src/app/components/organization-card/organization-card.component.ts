import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organization-card',
  templateUrl: './organization-card.component.html',
  styleUrls: ['./organization-card.component.css']
})
export class OrganizationCardComponent implements OnInit {
  @Input() org: any;

  constructor() { }

  ngOnInit() {
  }

}

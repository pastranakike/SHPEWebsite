import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organizations-row',
  templateUrl: './organizations-row.component.html',
  styleUrls: ['./organizations-row.component.css']
})
export class OrganizationsRowComponent implements OnInit {
  @Input() orgs: any[];
  @Input() title: any;

  constructor() { }

  ngOnInit() {
  }

}

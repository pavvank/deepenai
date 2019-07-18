import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.css']
})
export class PrimaryBtnComponent implements OnInit {

  @Input("btn-name") name: string;
  @Input("selected") selected: boolean;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu-btn',
  templateUrl: './sub-menu-btn.component.html',
  styleUrls: ['./sub-menu-btn.component.css']
})
export class SubMenuBtnComponent implements OnInit {

  @Input() value: string;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit() {
  }

}

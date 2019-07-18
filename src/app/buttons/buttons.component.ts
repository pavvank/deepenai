import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() value: string;
  @Input() status: string;

  constructor() { }

  ngOnInit() {
  }

  getClass(status: string): string {
    
    if (status == "complete")
      return "round-btn-complete";

    else if (status == "incomplete")
      return "round-btn-incomplete";

    else
      return "round-btn-current";

  }

}

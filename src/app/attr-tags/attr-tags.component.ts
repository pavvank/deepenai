import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attr-tags',
  templateUrl: './attr-tags.component.html',
  styleUrls: ['./attr-tags.component.css']
})
export class AttrTagsComponent implements OnInit {

  public value: string;
  public index: number;
  public self: AttrTagsComponent;

  public attrTagInterface: AttrTagInterface;

  constructor() { }

  ngOnInit() {
  }

  remove(index) {
    console.log("In remove of AttrTags");
    
    this.attrTagInterface.remove(index);
  }

}

export interface AttrTagInterface {
  remove(index: number);
}

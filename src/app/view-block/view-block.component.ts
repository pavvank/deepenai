import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AttrTagInterface, AttrTagsComponent } from '../attr-tags/attr-tags.component';

@Component({
  selector: 'app-view-block',
  templateUrl: './view-block.component.html',
  styleUrls: ['./view-block.component.css']
})
export class ViewBlockComponent implements OnInit, AttrTagInterface {

  tagName;
  shortCut;
  tagIndex: number = 0;
  tagSelf: ViewBlockComponent;

  tagInterface: TagInterface;


  @ViewChild('attrBox', { read: ViewContainerRef }) attrBox: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  attrList = [];
  index: number = 0;

  remove(index: number) {
    const attr = this.attrList.find((component) => component.instance.index == index);
    const attrIndex = this.attrList.indexOf(attr);

    if (attrIndex !== -1) {
      this.attrBox.remove(this.attrBox.indexOf(attr));
      this.attrList.splice(attrIndex, 1);
    }
  }

  createAttrs(attrValue: string) {
    const attrFactory = this.resolver.resolveComponentFactory(AttrTagsComponent);
    const attrBox = this.attrBox.createComponent(attrFactory);
    const attrBoxComp = attrBox.instance;
    attrBoxComp.value = attrValue;
    attrBoxComp.index = this.index;
    this.index++;
    attrBoxComp.self = attrBoxComp;
    attrBoxComp.attrTagInterface = this;

    this.attrList.push(attrBox);
  }

  ngOnInit() {

  }

  onRemove(index: number) {
    this.tagInterface.remove(index);
  }

  onSelect(index: number) {
    this.tagInterface.select(index);
  }
}

export interface TagInterface {
  remove(index: number);
  select(index: number);
}

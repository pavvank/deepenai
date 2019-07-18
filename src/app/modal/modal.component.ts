import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, HostListener } from '@angular/core';
import { ViewBlockComponent, TagInterface } from '../view-block/view-block.component';
import { Hotkeys } from '../hotkeys.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, TagInterface {

  @ViewChild('tagBox', { read: ViewContainerRef }) tagBox: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private hotkeys: Hotkeys) { }

  // Tagging --------------------------------------

  attributeName: string;
  tagList = [];
  tagIndex: number = 0;
  attrValue: string;
  selectedComp: any;

  remove(index: number) {
    const tag = this.tagList.find((component) => component.instance.tagIndex == index);
    const tagIndex = this.tagList.indexOf(tag);

    if (tagIndex !== -1) {
      this.tagBox.remove(this.tagBox.indexOf(tag));
      this.tagList.splice(tagIndex, 1);
    }
    // this.hotkeys.hotkeys.delete(tagIndex);
  }

  select(index: number) {
    const tag = this.tagList.find((component) => component.instance.tagIndex == index);
    const tagIndex = this.tagList.indexOf(tag);

    if (tagIndex !== -1) {
      this.selectedComp = tag.instance;
      this.attributeName = tag.instance.tagName;
      this.keyShortcut = tag.instance.shortCut;
    }
    this.attrValueInputBox.nativeElement.focus();
  }

  createTag() {
    if (this.attributeName != "" && this.attributeName != null) {
      const factory = this.resolver.resolveComponentFactory(ViewBlockComponent);
      const tagBox = this.tagBox.createComponent(factory);
      const tagBoxComp = tagBox.instance;
      tagBoxComp.tagIndex = this.tagIndex;
      this.tagIndex++;
      tagBoxComp.tagSelf = tagBoxComp;
      tagBoxComp.tagInterface = this;
      tagBoxComp.tagName = this.attributeName;
      tagBoxComp.shortCut = this.keyShortcut;
      this.selectedComp = tagBoxComp;
      this.tagList.push(tagBox);
      this.attrValueInputBox.nativeElement.focus();

      this.hotkeys.addShortcut({ keys: this.keyShortcut, index: this.tagIndex - 1 })
        .subscribe((data: any) => { this.select(data.index) });

    }

    // console.log(Array.from(new Set(this.arr)));
  }

  createTagAttr() {
    this.selectedComp.createAttrs(this.attrValue);
    this.attrValue = "";
  }
  // --------------------------------------

  @ViewChild('attrValueInputBox') attrValueInputBox;

  // Key Mappings--------------------------

  keyShortcut = "";

  arr = [];
  test(event: KeyboardEvent) {
    console.log(event);
    if (event.code != "Delete" && event.code != "Backspace"
      && event.code != "Enter" && event.code != "NumpadEnter"
      && event.code != "Tab") {
      this.arr.push(event.key);
      this.keyShortcut = this.appendKeyPresses();
    }
    else
      this.arr = [];

  }

  appendKeyPresses() {
    let value = "";
    let arr = Array.from(new Set(this.arr))
    for (let i = 0; i < arr.length; i++) {
      if (i != arr.length - 1)
        value += arr[i] + ".";
      else value += arr[i];
    }
    return value;
  }

  //---------------------------------------

  box: boolean = true;
  lane: boolean;
  point: boolean;
  polygon: boolean;

  cat: boolean = true;
  file: boolean;
  label: boolean;

  btn1: string = "current";
  btn2: string = "incomplete";
  btn3: string = "incomplete";

  part1 = false;
  part2 = false;

  ngOnInit() {
  }


  selectedMenu(menu: string) {
    if (menu == "box") {
      this.box = true;
      this.lane = false;
      this.point = false;
      this.polygon = false;
    }
    else if (menu == "lane") {
      this.box = false;
      this.lane = true;
      this.point = false;
      this.polygon = false;
    }
    else if (menu == "point") {
      this.box = false;
      this.lane = false;
      this.point = true;
      this.polygon = false;
    }
    else {
      this.box = false;
      this.lane = false;
      this.point = false;
      this.polygon = true;
    }
  }


  onNext() {
    if (this.btn3 == "current") { }
    else if (this.btn1 == "current") {
      this.btn1 = "complete";
      this.btn2 = "current";
      this.cat = false;
      this.file = true;
      this.label = false;
      this.part1 = true;
    }
    else if (this.btn2 == "current") {
      this.btn2 = "complete";
      this.btn3 = "current";
      this.cat = false;
      this.file = false;
      this.label = true;
      this.part2 = true;
    }
  }

  onPrevious() {
    if (this.btn1 == "current") { }
    else if (this.btn3 == "current") {
      this.btn3 = "incomplete";
      this.btn2 = "current";
      this.cat = false;
      this.file = true;
      this.label = false;
      this.part2 = false;
    }
    else if (this.btn2 == "current") {
      this.btn2 = "incomplete";
      this.btn1 = "current";
      this.cat = true;
      this.file = false;
      this.label = false;
      this.part1 = false;
    }
  }

}

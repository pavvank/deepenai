import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrTagsComponent } from './attr-tags.component';

describe('AttrTagsComponent', () => {
  let component: AttrTagsComponent;
  let fixture: ComponentFixture<AttrTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

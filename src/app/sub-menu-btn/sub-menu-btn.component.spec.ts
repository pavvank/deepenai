import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuBtnComponent } from './sub-menu-btn.component';

describe('SubMenuBtnComponent', () => {
  let component: SubMenuBtnComponent;
  let fixture: ComponentFixture<SubMenuBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

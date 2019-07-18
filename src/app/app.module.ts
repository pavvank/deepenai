import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { PrimaryBtnComponent } from './primary-btn/primary-btn.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SubMenuBtnComponent } from './sub-menu-btn/sub-menu-btn.component';
import { AttrTagsComponent } from './attr-tags/attr-tags.component';
import { ViewBlockComponent } from './view-block/view-block.component';
import { ListenerDirective } from './listener.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    PrimaryBtnComponent,
    ButtonsComponent,
    SubMenuBtnComponent,
    AttrTagsComponent,
    ViewBlockComponent,
    ListenerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AttrTagsComponent, ViewBlockComponent]
})
export class AppModule { }

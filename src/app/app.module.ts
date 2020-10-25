import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

import icons from '../assets/svg/svg-icons';

import { AppComponent } from './app.component';
import { TemplatesComponent } from './app-components/templates.component';
import { BasicInfoComponent } from './app-components/template-components/basic-info.component';
import { FieldsConfigComponent } from './app-components/template-components/fields-config.component';
import { AvailableComponentsComponent } from './app-components/template-components/fields-config-components/available-components.component';
import { CurrentFieldsComponent } from './app-components/template-components/fields-config-components/current-fields.component';
import { FieldEditComponent } from './app-components/template-components/fields-config-components/field-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    BasicInfoComponent,
    FieldsConfigComponent,
    AvailableComponentsComponent,
    CurrentFieldsComponent,
    FieldEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SvgIconsModule.forRoot({
      icons
    }),
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TitlePageComponent } from './tools/title-page/title-page.component';
import { UnitComponent } from './tools/unit/unit.component';
import { AddUnitComponent } from './tools/add-unit/add-unit.component';
import { SaveUnitComponent } from './tools/save-unit/save-unit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    UnitComponent,
    AddUnitComponent,
    SaveUnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

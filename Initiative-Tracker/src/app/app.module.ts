import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TitlePageComponent } from './tools/title-page/title-page.component';
import { UnitComponent } from './tools/unit/unit.component';
import { AddUnitComponent } from './tools/add-unit/add-unit.component';
import { SaveUnitComponent } from './tools/save-unit/save-unit.component';

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
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

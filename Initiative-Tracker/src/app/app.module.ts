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
import { SaveUnitComponent } from './tools/save-unit/save-unit.component';
import { UpdateUnitComponent } from './tools/modals/update-unit/update-unit.component';
import { AddUnitComponent } from './tools/modals/add-unit/add-unit.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    UnitComponent,
    AddUnitComponent,
    SaveUnitComponent,
    UpdateUnitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

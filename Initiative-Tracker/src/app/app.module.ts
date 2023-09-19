import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TitlePageComponent } from './title-page/title-page.component';
import { UnitComponent } from './unit/unit.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { SaveUnitComponent } from './save-unit/save-unit.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

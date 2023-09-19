import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TitlePageComponent } from './title-page/title-page.component';
import { UnitComponent } from './unit/unit.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { SaveUnitComponent } from './save-unit/save-unit.component';

const routes: Routes = [

  {path: 'app-unit', component: UnitComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }

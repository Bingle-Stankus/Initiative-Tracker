import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TitlePageComponent } from './tools/title-page/title-page.component';
import { UnitComponent } from './tools/unit/unit.component';
import { AddUnitComponent } from './tools/add-unit/add-unit.component';
import { SaveUnitComponent } from './tools/save-unit/save-unit.component';

const routes: Routes = [

  {path: 'app-title-page', component: TitlePageComponent},
  {path: 'app-unit-page', component: UnitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

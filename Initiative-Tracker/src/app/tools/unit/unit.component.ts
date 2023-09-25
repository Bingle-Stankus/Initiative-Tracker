import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';


import { UNIT } from 'src/app/models/interface/unit-interface';
import { UpdateUnitComponent } from '../modals/update-unit/update-unit.component';




const UNITLIST : UNIT[] = [

  {order: 1 , name: 'Sean Pagel' , initiative: 14 , dexterity: 12},
  {order: 2 , name: 'Sean Pagel' , initiative: 14 , dexterity: 12},
  {order: 3 , name: 'Sean Pagel' , initiative: 14 , dexterity: 12},

];

@Component({
  selector: 'app-unit-page',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css'],
})



export class UnitComponent {

  displayedColumns: string[] = ['order' , 'name' , 'initiative' , 'dexterity' , 'actions'];
  dataSource = UNITLIST;

  constructor(
    public dialog: MatDialog,
    public router: Router,
  ) {}

  openUpdateDialog(): void{
    console.log("Opening Update Dialog");
    const dialogRef = this.dialog.open(UpdateUnitComponent, {
      width:'40%',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Update Dialog Closed");

    })
  }

  // dev tools
  devToolsNavTitle(): void{
    this.router.navigate(['/app-title-page']);
  }

}
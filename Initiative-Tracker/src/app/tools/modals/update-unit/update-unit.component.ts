import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UNIT } from 'src/app/models/interface/unit-interface';

@Component({
  selector: 'app-update-unit',
  templateUrl: './update-unit.component.html',
  styleUrls: ['./update-unit.component.css']
})
export class UpdateUnitComponent {

  constructor(
    public dialogRef:
    MatDialogRef<UpdateUnitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UNIT,
  ){}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}

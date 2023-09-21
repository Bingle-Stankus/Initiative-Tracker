import { Component } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})


export class UnitComponent {

  displayedColumns: string[] = ['Order' , 'Name' , 'Initiative' , 'Dexterity'];

}

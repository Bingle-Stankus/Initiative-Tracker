import { Component } from '@angular/core';
import { UNIT } from 'src/app/models/interface/unit-interface';

const UNITLIST : UNIT[] = [

  {order: 1 , name: 'Sean Pagel' , initiative: 14 , dexterity: 12},
  {order: 2 , name: 'Sean Pagel' , initiative: 14 , dexterity: 12},
  {order: 3 , name: 'Sean Pagel' , initiative: 14 , dexterity: 12},

];

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})



export class UnitComponent {

  displayedColumns: string[] = ['Order' , 'Name' , 'Initiative' , 'Dexterity'];
  dataSource = UNITLIST;

}
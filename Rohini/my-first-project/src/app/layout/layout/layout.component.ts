import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'service'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  service: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', service: 'fg'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', service: 'fg'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', service: 'fg'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', service: 'fg'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', service: 'fg'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', service: 'fg'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', service: 'fg'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', service: 'fg'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', service: 'fg'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', service: 'fg'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', service: 'fg'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', service: 'fg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', service: 'fg'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', service: 'fg'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', service: 'fg'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', service: 'fg'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', service: 'fg'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', service: 'fg'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', service: 'fg'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', service: 'fg'},
  {position: 21, name: 'Phosphorus', weight: 30.9738, symbol: 'P', service: 'fg'},
  {position: 22, name: 'Sulfur', weight: 32.065, symbol: 'S', service: 'fg'},
  {position: 23, name: 'Chlorine', weight: 35.453, symbol: 'Cl', service: 'fg'},
  {position: 24, name: 'Argon', weight: 39.948, symbol: 'Ar', service: 'fg'},
  {position: 25, name: 'Potassium', weight: 39.0983, symbol: 'K', service: 'fg'},
];


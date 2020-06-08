import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  typesOfShoes: string[] = [
    'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers',
    'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers',
    'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers',
    'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'
  ];
  selectedShoe: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  objectCheck(data){
    console.log(data);
    this.selectedShoe = data;
  }

  cancelCountry(){
    this.selectedShoe = '';
  }

}

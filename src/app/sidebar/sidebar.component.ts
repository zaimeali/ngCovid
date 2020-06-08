import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { Countries } from './country.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  countries: any = [];
  selectedCountry: string = '';

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getCountries().subscribe((data) => {
      this.countries = data['response'],
      console.log(data['response'])
    });
  }

  objectCheck(data){
    console.log(data);
    this.selectedCountry = data;
  }

  cancelCountry(){
    this.selectedCountry = '';
  }

}

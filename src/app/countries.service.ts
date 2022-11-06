import { Injectable } from '@angular/core';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  constructor() { }
  getCountirs():Country[]
  {
    return [
      new Country(1,"india"),
      new Country(2,"china"),
      new Country(3,"UK"),
      new Country(4,"USA"),

    ]
  }
}

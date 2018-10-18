import { Injectable } from '@angular/core';

import { Model } from "./model";
import { DATA } from "./data";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }
 
  getCountries(): Model[] {
    return DATA;
  }
 
  getPopulatedCountries(): Model[] {
    return DATA.sort((a, b) => b.population - a.population).slice(0, 3);
  }
 
  getLargestCountries(): Model[] {
    return DATA.sort((a, b) => b.area - a.area).slice(0, 3);
  }
 
  getGDPCountries(): Model[] {
    return DATA.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
  }
 
  getModel(name: string): Model {
    return DATA.find(Model => Model.name === name);
  }
}

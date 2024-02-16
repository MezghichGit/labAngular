import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor() { }

  getData()
  {
    return "Hello from service";
  }
}

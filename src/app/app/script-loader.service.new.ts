import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  constructor() { }

  testFunction() {
    console.log('Test function in ScriptLoaderService');
  }
}

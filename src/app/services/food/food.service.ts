import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      'assets/images/foods/foot-1.jpg',
      'assets/images/foods/foot-2.jpg',
      'assets/images/foods/foot-3.jpg',
      'assets/images/foods/foot-4.jpg',
      'assets/images/foods/foot-5.jpg',
      'assets/images/foods/foot-6.jpg',
    ]
  }
}

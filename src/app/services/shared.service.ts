import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isNavActive: boolean = false;

  toggleNavState() {
    this.isNavActive = !this.isNavActive;

  }
}

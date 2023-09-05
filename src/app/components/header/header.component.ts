import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('mobileMenu') mobileMenu: ElementRef | undefined;
  @ViewChild('navList') navList: ElementRef | undefined;
  @ViewChild('links') links: ElementRef | undefined;

  constructor() {}

  ngAfterViewInit() {
    this.initMobileNavbar();
  }

  initMobileNavbar() {
    if (this.mobileMenu && this.navList) {
      this.mobileMenu.nativeElement.addEventListener('click', () => {
        if (this.navList) {
          this.navList.nativeElement.classList.toggle('active');
        }
        if (this.mobileMenu) {
          this.mobileMenu.nativeElement.classList.toggle('active');
          console.log("funciona")
        }
        if (this.links) {
          this.links.nativeElement.classList.toggle('active');
          //console.log("funciona")
        }
      });
    }
  }
}

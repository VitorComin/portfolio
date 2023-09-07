import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('mobileMenu') mobileMenu: ElementRef | undefined;
  @ViewChild('navList') navList: ElementRef | undefined;
  @ViewChild('links') links: ElementRef | undefined;

  constructor(private sharedService: SharedService) {}

  ngAfterViewInit() {
    this.initMobileNavbar();
  }

  initMobileNavbar() {
    if (this.mobileMenu && this.navList) {
      this.mobileMenu.nativeElement.addEventListener('click', () => {
        if (this.navList) {
          this.navList.nativeElement.classList.toggle('active');
          this.sharedService.toggleNavState();
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

  closeMenu() {
    if (this.navList) {
      this.navList.nativeElement.classList.remove('active');
    }
    if (this.mobileMenu) {
      this.mobileMenu.nativeElement.classList.remove('active');
    }
    this.sharedService.isNavActive = false;
  }
}

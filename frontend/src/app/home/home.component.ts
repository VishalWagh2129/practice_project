import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isMenuOpen = false;
  subMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  toggleSubMenu(menuId: string) {
    const subMenu = document.getElementById(menuId);
    if (subMenu) {
      subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    }
  }

}

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Breadcrumb } from '../component/shared/breadcrumb/breadcrumb';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, Breadcrumb, FormsModule, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true,
})
export class Layout {
  quickQuery = '';
  isMobileMenuOpen = false;

  constructor(private router: Router) { }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  goSearch() {
    const q = (this.quickQuery || '').trim();
    this.closeMobileMenu();
    this.router.navigate(['/busqueda'], { queryParams: { q } });
  }
}

import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  mobileOpen = signal(false);
  profileOpen = signal(false);

  constructor(private router: Router) {
    this.router.events.subscribe(() => this.closeAll());
  }

  toggleMobile() {
    this.mobileOpen.update((v: any) => !v);
  }

  toggleProfile() {
    this.profileOpen.update((v: any) => !v);
  }

  closeAll() {
    this.mobileOpen.set(false);
    this.profileOpen.set(false);
  }
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  mobileOpen = signal(false);
  profileOpen = signal(false);

  toggleMobile() {
    this.mobileOpen.update((v: any) => !v);
  }

  toggleProfile() {
    this.profileOpen.update((v: any) => !v);
  }
}

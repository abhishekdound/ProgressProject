import { Component, output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from '../../theme/theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  profileOpen = signal(false);
  isFullscreen = signal(false);

  searchChange = output<string>();
  
  constructor(public theme: Theme) {}

  toggleProfile() {
    this.profileOpen.update(v => !v);
  }

  closeAll() {
    this.profileOpen.set(false);
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      this.isFullscreen.set(true);
    } else {
      document.exitFullscreen();
      this.isFullscreen.set(false);
    }
  }
}

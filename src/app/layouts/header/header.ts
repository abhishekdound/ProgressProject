import { Component, effect, ElementRef, output, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from '../../theme/theme.service';
import { Ui } from '../../ui-service/ui.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  profileOpen = signal(false);
  isFullscreen = signal(false);
  
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  searchChange = output<string>();
console: any;
  
  constructor(public theme: Theme,public ui: Ui) {
    effect(() => {
      if (this.ui.showHeaderSearch()) {
        // wait for DOM render
        setTimeout(() => {
          this.searchInput?.nativeElement.focus();
        }, 0);
      }
    });
  }

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

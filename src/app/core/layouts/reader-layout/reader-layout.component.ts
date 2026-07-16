import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-reader-layout',
  templateUrl: './reader-layout.component.html',
  styleUrls: ['./reader-layout.component.scss']
})
export class ReaderLayoutComponent {
  isHidden = false;
  isPlaying = false;
  isMuted = false;
  private timeoutId: any;

  @HostListener('mousemove')
  onMouseMove() {
    this.isHidden = false;
    clearTimeout(this.timeoutId);
    
    this.timeoutId = setTimeout(() => {
      this.isHidden = true;
    }, 3000);
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
  }
}

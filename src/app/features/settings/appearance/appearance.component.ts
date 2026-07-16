import { Component } from '@angular/core';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss']
})
export class AppearanceComponent {
  theme: 'dark' | 'light' | 'system' = 'dark';
  accentColor: string = '#8b5cf6'; // Purple
  fontSize: 'small' | 'medium' | 'large' = 'medium';
  reduceMotion: boolean = false;
  highContrast: boolean = false;

  colors = [
    { name: 'Purple', hex: '#8b5cf6' },
    { name: 'Blue', hex: '#3b82f6' },
    { name: 'Green', hex: '#10b981' },
    { name: 'Orange', hex: '#f59e0b' },
    { name: 'Red', hex: '#ef4444' }
  ];

  setTheme(t: 'dark' | 'light' | 'system') { this.theme = t; }
  setColor(c: string) { this.accentColor = c; }
  setFontSize(s: 'small' | 'medium' | 'large') { this.fontSize = s; }
  toggleMotion() { this.reduceMotion = !this.reduceMotion; }
  toggleContrast() { this.highContrast = !this.highContrast; }
}

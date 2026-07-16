import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card',
  templateUrl: './premium-card.component.html',
  styleUrls: ['./premium-card.component.css']
})
export class PremiumCardComponent {
  @Input() padding: string = '1.5rem';
}

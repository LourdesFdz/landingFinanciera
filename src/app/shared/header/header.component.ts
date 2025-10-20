import { Component } from '@angular/core';

declare global {
  interface Window { dataLayer: any[]; }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  onCTA() {
    // DataLayer push for CTA click
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_click',
      category: 'Header',
      label: 'Quiero más información'
    });

    // Navigate to contact (client-side)
    location.href = '/contact';
  }
}
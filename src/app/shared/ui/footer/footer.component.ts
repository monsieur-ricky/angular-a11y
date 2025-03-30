import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  template: `
    <footer>&copy;2025 The Poster Shop - All Rights Reserved</footer>
  `,
  styles: `
    footer {
      font-size: 0.9rem;
      text-align: center;
      padding: 2rem 1rem;
      margin-top: 5rem;
      background-color: var(--secondary-color);
      color: var(--text-color);
    }
  `
})
export class FooterComponent {}

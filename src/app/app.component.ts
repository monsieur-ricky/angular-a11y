import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
import { FooterComponent } from './shared/ui/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />

    <main>
      <router-outlet />
    </main>

    <app-footer />
  `,
  styles: []
})
export class AppComponent {
  title = 'The Poster Shop';
}

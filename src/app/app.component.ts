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
  // private readonly liveAnnouncer = inject(LiveAnnouncer);
  // private readonly router = inject(Router);
  // private readonly activatedRoute = inject(ActivatedRoute);
  // private readonly titleStrategy = inject(TitleStrategy);

  title = 'The Poster Shop';

  // constructor() {
  //   // Announce the title of the current route when the navigation ends
  //   // and the route is resolved to make it accessible for screen readers
  //   this.router.events
  //     .pipe(
  //       filter((event) => event instanceof NavigationEnd),
  //       map(() => {
  //         // Navigate to the deepest child route
  //         let currentRoute = this.activatedRoute;
  //         while (currentRoute.firstChild) {
  //           currentRoute = currentRoute.firstChild;
  //         }
  //         return currentRoute;
  //       })
  //     )
  //     .subscribe((route) => {
  //       // Get the title from the resolved route
  //       const pageTitle = this.titleStrategy.getResolvedTitleForRoute(
  //         route.snapshot
  //       );
  //       // Announce the page title for screen readers
  //       this.liveAnnouncer.announce(pageTitle ?? this.title, 'assertive');
  //     });
  // }
}

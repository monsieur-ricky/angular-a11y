import { CartService } from './../../services/cart.service';
import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  template: `
    <header>
      <span class="logo">The Poster Shop</span>

      <nav>
        <ul>
          <li>
            <a
              routerLink="/posters"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              [routerLinkActiveOptions]="{ exact: true }"
            >
              Posters
            </a>
          </li>
          <li>
            <a
              routerLink="/contact"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
            >
              Contacts
            </a>
          </li>
          <li>
            <a
              routerLink="/cart"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              class="cart"
            >
              Cart

              <span aria-hidden="true">
                {{ count() }}
              </span>

              <span class="sr-only"> with {{ count() }} items </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: `
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: var(--primary-color);
      color: white;

      .logo {
        font-size: 1.5rem;
      }

      nav {
        ul {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            display: inline-block;

            a {
              display: block;
              padding: 0.35rem 1rem;
              color: #ffffff;
              text-decoration: none;
              transition: all 0.3s ease-in-out;

              &:is(:hover, .active) {
                background-color: var(--primary-color-dark);
              }

              &.cart {
                position: relative;

                span {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 0.8rem;
                  font-weight: 500;
                  background: rgb(165, 0, 0);
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  position: absolute;
                  top: -5px;
                  right: -5px;
                  line-height: 2;
                }
              }
            }
          }
        }
      }
    }
  `
})
export class HeaderComponent {
  private readonly cartService = inject(CartService);
  private readonly cart = this.cartService.shoppingCart;

  count = computed(() => this.cart().items.length);
}

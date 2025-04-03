import { inject, Injectable, signal } from '@angular/core';
import { Poster } from '../models/product.interface';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface CartItem {
  poster: Poster;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly liveAnnouncer = inject(LiveAnnouncer);
  private readonly dummyCartItems: CartItem[] = [
    {
      poster: {
        id: 1,
        name: 'Misty Forest Path',
        description: '',
        alternativeText: '',
        price: 18.99,
        imageUrl: '',
        sizes: []
      },
      quantity: 2
    },
    {
      poster: {
        id: 2,
        name: 'Lavender Horizon Bridge',
        description: '',
        alternativeText: '',
        price: 22.99,
        imageUrl: '',
        sizes: []
      },
      quantity: 1
    }
  ];

  private readonly cart = signal<Cart>({
    items: [...this.dummyCartItems],
    total: 60.97
  });

  readonly shoppingCart = this.cart.asReadonly();

  addItem(poster: Poster): void {
    this.cart.update((items) => {
      const existingItem = items?.items.find((i) => i.poster.id === poster.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        items?.items.push({ poster, quantity: 1 });
      }

      const total = items?.items.reduce((acc, item) => {
        return acc + item.poster.price * item.quantity;
      }, 0);

      return { items: items?.items || [], total: total ?? 0 };
    });
  }

  removeItem(item: Poster): void {
    this.cart.update((items) => {
      items.items = items?.items.filter((i) => i.poster.id !== item.id);

      const total = items?.items.reduce((acc, item) => {
        return acc + item.poster.price * item.quantity;
      }, 0);

      return { items: items?.items || [], total: total ?? 0 };
    });

    const message = `Removed ${item.name} from cart`;
    this.liveAnnouncer.announce(message, 'assertive');
  }

  clearCart(): void {
    this.cart.set({ items: [], total: 0 });
  }
}

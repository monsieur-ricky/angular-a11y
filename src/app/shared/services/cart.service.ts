import { Injectable, signal } from '@angular/core';
import { Poster } from '../models/product.interface';

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
  private readonly cart = signal<Cart>({ items: [], total: 0 });

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
  }

  clearCart(): void {
    this.cart.set({ items: [], total: 0 });
  }
}

import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from '../shared/ui/dialog/dialog.component';
import { CartService } from '../shared/services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { Poster } from '../shared/models/product.interface';

@Component({
  selector: 'app-cart',
  imports: [FormsModule, CurrencyPipe, DialogComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private readonly cartService = inject(CartService);

  cart = this.cartService.shoppingCart;
  showDialog = signal(false);

  onBuyItems(): void {
    this.showDialog.set(true);
    this.cartService.clearCart();
  }

  onDeleteItem(poster: Poster): void {
    this.cartService.removeItem(poster);
  }
}

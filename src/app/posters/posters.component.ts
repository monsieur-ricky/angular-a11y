import { Component, inject, resource, signal } from '@angular/core';
import { Poster } from '../shared/models/product.interface';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../shared/services/cart.service';
import { DialogComponent } from '../shared/ui/dialog/dialog.component';

@Component({
  selector: 'app-posters',
  imports: [RouterModule, CurrencyPipe, NgOptimizedImage, DialogComponent],
  templateUrl: './posters.component.html',
  styleUrl: './posters.component.scss'
})
export class PostersComponent {
  private readonly cartService = inject(CartService);

  showDialog = signal(false);
  dialogMessage = signal('');

  productsResource = resource({
    loader: () =>
      fetch('data/posters.json').then((res) => res.json() as Promise<Poster[]>)
  });

  addToCart(poster: Poster) {
    this.cartService.addItem(poster);
    this.dialogMessage.set(`Added the ${poster.name} poster to the cart.`);
    this.showDialog.set(true);
  }
}

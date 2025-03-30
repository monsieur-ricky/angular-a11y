import { Component, inject, resource } from '@angular/core';
import { Poster } from '../shared/models/product.interface';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-posters',
  imports: [RouterModule, CurrencyPipe, NgOptimizedImage],
  templateUrl: './posters.component.html',
  styleUrl: './posters.component.scss'
})
export class PostersComponent {
  private readonly cartService = inject(CartService);

  productsResource = resource({
    loader: () =>
      fetch('data/posters.json').then((res) => res.json() as Promise<Poster[]>)
  });

  addToCart(poster: Poster) {
    this.cartService.addItem(poster);
  }
}

import { Component, computed, input, resource, signal } from '@angular/core';
import { Poster } from '../shared/models/product.interface';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { DialogComponent } from '../shared/ui/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-poster-details',
  imports: [
    FormsModule,
    RouterModule,
    CurrencyPipe,
    NgOptimizedImage,
    DialogComponent
  ],
  templateUrl: './poster-details.component.html',
  styleUrl: './poster-details.component.scss'
})
export class PosterDetailsComponent {
  id = input<number>();

  showDialog = signal(false);
  selectedSize = signal<string | undefined>(undefined);
  dialogMessage = signal('');

  productDetailsResource = resource({
    request: () => this.id(),
    loader: async ({ request }) => {
      const response = await fetch('data/posters.json');
      const posters = (await response.json()) as Poster[];

      return posters.find((poster) => poster.id === Number(request));
    }
  });

  name = computed(() => this.productDetailsResource.value()?.name);
  price = computed(() => this.productDetailsResource.value()?.price);
  sizes = computed(() => this.productDetailsResource.value()?.sizes);
  description = computed(
    () => this.productDetailsResource.value()?.description
  );
  alternativeText = computed(
    () => this.productDetailsResource.value()?.alternativeText
  );
  imageUrl = computed(
    () => this.productDetailsResource.value()?.imageUrl ?? 'images/no-image.svg'
  );

  onAddToCart(): void {
    if (!this.selectedSize()) {
      this.dialogMessage.set('Please select a size before adding to cart.');
      this.showDialog.set(true);
      return;
    }

    this.dialogMessage.set('Product added to cart!');
    this.showDialog.set(true);
    this.selectedSize.set(undefined);
  }
}

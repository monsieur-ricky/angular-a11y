import {
  Component,
  effect,
  input,
  model,
  viewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [],
  template: `
    <dialog #dialog>
      <p>{{ message() }}</p>

      <button (click)="show.set(false)">Close</button>
    </dialog>
  `,
  styles: `
    dialog {
      min-width: 350px;
      padding: 1.5rem;
      box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0);
      border: none;
      border-radius: 1rem;
      transition:
        display 0.3s allow-discrete,
        overlay 0.3s allow-discrete;
      
      animation: close 0.3s forwards;	

      &[open] {
        box-shadow: 0 0 0 100vw  rgba(0, 0, 0, 0.8);
        animation: open 0.3s forwards;
      }
    }

    @keyframes open {
      from { opacity: 0 }
      to   { opacity: 1 }
    }

    @keyframes close {
      from { opacity: 1 }
      to   { opacity: 0 }
    }
  `
})
export class DialogComponent {
  show = model.required<boolean>();
  message = input<string>();

  dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');

  showModalEffect = effect(() => {
    const dialog = this.dialog()?.nativeElement;

    if (!dialog) {
      return;
    }

    if (this.show()) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  });
}

import { Component, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from '../shared/ui/dialog/dialog.component';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, DialogComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = signal('');
  email = signal('');
  message = signal('');
  showDialog = signal(false);

  form = viewChild<HTMLFormElement>('form');

  onSubmit() {
    this.showDialog.set(true);
    this.name.set('');
    this.email.set('');
    this.message.set('');
  }
}

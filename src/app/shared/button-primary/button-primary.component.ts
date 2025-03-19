import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-primary',
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.css'
})
export class ButtonPrimaryComponent {
  @Input() text: string  = '';
}

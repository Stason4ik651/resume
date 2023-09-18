import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css'],
})
export class SeparatorComponent {
  @Input() separator!: string;
}

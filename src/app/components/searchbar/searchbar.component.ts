import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() placeholder?: string;

  constructor() {}

  registerOnChange() {}

  registerOnTouched() {}
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() value = null;
  @Input() placeholder?: string;
  @Output() searchChange = new EventEmitter<any>();
  @Output() submitSearch = new EventEmitter<void>();

  public handleSubmit(): void {
    this.submitSearch.emit();
  }

  public handleOnChange(event: Event): void {
    this.searchChange.emit((event.target as HTMLInputElement).value);
  }
}

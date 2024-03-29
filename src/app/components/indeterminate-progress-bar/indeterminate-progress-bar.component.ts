import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indeterminate-progress-bar',
  templateUrl: './indeterminate-progress-bar.component.html',
  styleUrls: ['./indeterminate-progress-bar.component.scss'],
})
export class IndeterminateProgressBarComponent {
  @Input() isLoading: boolean;
}

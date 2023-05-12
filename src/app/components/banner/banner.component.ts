import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() mobileMessage: string;
  @Input() desktopMessage: string;
  @Input() learnMoreLink?: string;
  @Input() hasCloseButton?: boolean;
  @Input() hasActionButton?: boolean;

  @Output() clickClose = new EventEmitter<void>();

  public handleOnClickClose(): void {
    this.clickClose.emit();
  }
}

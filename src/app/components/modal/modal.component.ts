import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() modalTitle: string;
  @Input() hasCloseButton: boolean;
  @Input() isOpen: boolean;
  @Input() icon?: string;
  @Output() clickClose = new EventEmitter<void>();

  public handleOnClickClose(): void {
    this.clickClose.emit();
  }
}

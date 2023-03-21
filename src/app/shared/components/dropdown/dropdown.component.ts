import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Input() title: string = 'Select an option';
  @Output() onSelect:EventEmitter<string> = new EventEmitter<string>();

  select(selectedOption: string) {
    this.onSelect.emit(selectedOption)
  }

}

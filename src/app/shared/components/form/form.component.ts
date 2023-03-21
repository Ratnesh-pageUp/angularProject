import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface FormSetting {
  label: string;
  type: string;
  control: FormControl;
  errorMsg?: string;
  placeHolder?: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() formSetting: FormSetting[] = [];
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() inputClassList: string = '';
  @Output() getFormValue: EventEmitter<any> = new EventEmitter<any>();
  formIsVisible: boolean = true;

  getErrorMessage(index: number) {
    if (this.formSetting[index].control.hasError('required')) {
      return 'You must enter a value';
    }
    return this.formSetting[index].control.invalid
      ? this.formSetting[index].errorMsg
      : '';
  }

  submitForm() {
    if (this.formGroup.valid) {
      this.getFormValue.emit(this.formGroup.value);
      console.log(this.formGroup.value);
    } else {
      console.log('form data is invalid');
    }
  }

  isInputProvided(): boolean {
    return true;
  }

  isProvidedInputValid(): string {
    if (Object.keys(this.formGroup.controls).length === 0) {
      this.formIsVisible = false;
      this.isInputProvided();
      return 'FormGroup is not provided';
    } else if (this.formSetting.length === 0) {
      this.formIsVisible = false;
      this.isInputProvided();
      return 'Form-setting is not provided';
    } else if (
      Object.keys(this.formGroup.controls).length != this.formSetting.length
    ) {
      this.formIsVisible = false;
      this.isInputProvided();
      return 'The length of Form-setting and FormGroup is not equal';
    } else {
      return '';
    }
  }
}

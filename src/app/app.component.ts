import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StyleUtilityService } from './services/style-utility.service';
import { FormSetting } from './shared/components/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  inputForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
  });

  formSetting: FormSetting[] = [
    {
      label: 'Name',
      type: 'text',
      control: this.inputForm.controls.name,
      errorMsg: 'please enter a valid name',
    },
    {
      label: 'Phone',
      type: 'number',
      control: this.inputForm.controls.phone,
      errorMsg: 'please enter a valid phone',
    },
    {
      label: 'Email',
      type: 'text',
      control: this.inputForm.controls.email,
      errorMsg: 'please enter a valid email',
    },
    {
      label: 'Password',
      type: 'password',
      control: this.inputForm.controls.password,
      errorMsg: 'please enter a valid password',
      placeHolder:'xyz'
    },
  ];

  constructor(public sus: StyleUtilityService) {}

  ngOnInit(): void {
    // this.showProgressBar();
  }

  //  created this function to test the progress bar component and it is working fine:
  value = 10;
  showProgressBar() {
    setInterval(() => {
      if (this.value == 100) {
        this.value = 0;
      }
      this.sus.setProgress((this.value += 10));
    }, 1000);
  }

  //  created this function to test the dropdown component and it is working fine:
  onSelectOption(selectedOption: string) {
    console.log(selectedOption);
  }
}

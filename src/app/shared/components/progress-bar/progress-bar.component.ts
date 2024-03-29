import { Component, Input, OnInit } from '@angular/core';
import { StyleUtilityService } from 'src/app/services/style-utility.service';

export declare type ProgressBarMode =
  | 'determinate'
  | 'indeterminate'
  | 'buffer'
  | 'query';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() mode: ProgressBarMode = 'query';
  @Input() static: boolean = false;

  constructor(public sus: StyleUtilityService) {}

  ngOnInit(): void {
    if(this.static&&this.mode=='determinate'){
      this.mode='query'
    }
  }
}

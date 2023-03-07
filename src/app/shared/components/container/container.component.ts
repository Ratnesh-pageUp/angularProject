import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  @Input() ngClass: string = 'container';
  @Input() loaderMessage?:string;
  @Input() errorMessage?:string;
  @Input() loading: boolean = false;
  @Input() hasError: boolean = false;
}

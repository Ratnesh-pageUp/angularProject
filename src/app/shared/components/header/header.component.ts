import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StyleUtilityService } from 'src/app/services/style-utility.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public sus: StyleUtilityService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cd.detectChanges();
  }
}

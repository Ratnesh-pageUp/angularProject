import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-header-with-sidebar',
  templateUrl: './header-with-sidebar.component.html',
  styleUrls: ['./header-with-sidebar.component.scss'],
})
export class HeaderWithSidebarComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver , private cd:ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cd.detectChanges()
  }
}

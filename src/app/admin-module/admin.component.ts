import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { StyleUtilityService } from '../services/style-utility.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  tableData = [];
  columnName: string[] = ['id', 'body', 'Action'];
  actionButtonsName: string[] = ['Edit', 'View'];

  constructor(
    private cd: ChangeDetectorRef,
    public sus: StyleUtilityService
  ) {}

  getData() {
    this.sus.setProgress(10);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.sus.setProgress(60);
        return res.json();
      })
      .then((data) => {
        this.sus.setProgress(80);
        this.tableData = data;
        this.columnName = ['id', 'body', 'Action'];
        this.sus.setProgress(100);
        // this.columnName = Object.keys(this.tableData[0]);
      });
  }

  ngOnInit(): void {
    this.sus.setHeaderVisibility(false);
    this.getData();
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.sus.setHeaderVisibility(true);
  }

  getAction(buttonPosition: number) {
    console.log(buttonPosition);
  }
}

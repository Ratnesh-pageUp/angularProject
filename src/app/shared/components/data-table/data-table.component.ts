import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  ViewChild,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, AfterViewInit {
  public dataSource: any = [];
  @Input() columnNames: string[] = [];
  @Input() tableData: any[] = [];
  @Input() enableAction: boolean = false;
  @Input() actionButtonsName: string[] = [];
  @Input() ActionColumnAt: number = this.columnNames.length - 1;
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLinkClick: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  public isActionColumn(columnIndex: number): boolean {
    if (this.ActionColumnAt === - 1) {
      this.ActionColumnAt = this.columnNames.length - 1;
      return !(this.ActionColumnAt === columnIndex && this.enableAction);
    }
    return !(this.ActionColumnAt === columnIndex && this.enableAction);
  }

  public onActionButtonClick(actionButtonPosition: number , recordIndex:number): void {
    this.onButtonClick.emit({actionButtonPosition , recordIndex});
  }

  public isDataUndefined(data: any): boolean {
    return data === undefined;
  }

  public linkClick(data: any): void {
    this.onLinkClick.emit(0);
  }
}

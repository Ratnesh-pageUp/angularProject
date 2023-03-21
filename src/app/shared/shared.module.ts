import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HeaderWithSidebarComponent } from './components/header-with-sidebar/header-with-sidebar.component';
import { ProfileComponent } from './pages-shared/profile/profile.component';
import { RouterModule } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormComponent } from './components/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ErrorComponent,
    LoaderComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    HeaderWithSidebarComponent,
    ProfileComponent,
    DataTableComponent,
    DropdownComponent,
    ProgressBarComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    FormComponent,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarComponent,
    ErrorComponent,
    LoaderComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    HeaderWithSidebarComponent,
    ProfileComponent,
    DataTableComponent,
    MatIconModule,
    DropdownComponent,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [ErrorComponent, LoaderComponent, ContainerComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ErrorComponent, LoaderComponent, ContainerComponent],
})
export class SharedModule {}

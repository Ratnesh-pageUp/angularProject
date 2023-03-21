import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithSidebarComponent } from './header-with-sidebar.component';

describe('HeaderWithSidebarComponent', () => {
  let component: HeaderWithSidebarComponent;
  let fixture: ComponentFixture<HeaderWithSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWithSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

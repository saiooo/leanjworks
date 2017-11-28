import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullheaderComponent } from './fullheader.component';

describe('FullheaderComponent', () => {
  let component: FullheaderComponent;
  let fixture: ComponentFixture<FullheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscontainerComponent } from './productscontainer.component';

describe('ProductscontainerComponent', () => {
  let component: ProductscontainerComponent;
  let fixture: ComponentFixture<ProductscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

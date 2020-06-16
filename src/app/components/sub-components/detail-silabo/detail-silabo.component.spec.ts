import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSilaboComponent } from './detail-silabo.component';

describe('DetailSilaboComponent', () => {
  let component: DetailSilaboComponent;
  let fixture: ComponentFixture<DetailSilaboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSilaboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSilaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCourceComponent } from './detail-cource.component';

describe('DetailCourceComponent', () => {
  let component: DetailCourceComponent;
  let fixture: ComponentFixture<DetailCourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

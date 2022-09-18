import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpatientComponent } from './getpatient.component';

describe('GetpatientComponent', () => {
  let component: GetpatientComponent;
  let fixture: ComponentFixture<GetpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

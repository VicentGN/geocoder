import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFullDataComponent } from './get-full-data.component';

describe('GetFullDataComponent', () => {
  let component: GetFullDataComponent;
  let fixture: ComponentFixture<GetFullDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFullDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFullDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

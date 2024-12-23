import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractorComponent } from './add-contractor.component';

describe('AddContractorComponent', () => {
  let component: AddContractorComponent;
  let fixture: ComponentFixture<AddContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddContractorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

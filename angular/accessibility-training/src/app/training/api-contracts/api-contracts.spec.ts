import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiContractsComponent } from './api-contracts';

describe('ApiContractsComponent', () => {
  let component: ApiContractsComponent;
  let fixture: ComponentFixture<ApiContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiContractsComponent] // ✅ standalone component goes in imports
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiContractsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

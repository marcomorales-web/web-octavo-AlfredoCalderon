import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyendasComponent } from './leyendas.component';

describe('LeyendasComponent', () => {
  let component: LeyendasComponent;
  let fixture: ComponentFixture<LeyendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyendasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeyendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

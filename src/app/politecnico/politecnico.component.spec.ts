import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitecnicoComponent } from './politecnico.component';

describe('PolitecnicoComponent', () => {
  let component: PolitecnicoComponent;
  let fixture: ComponentFixture<PolitecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolitecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

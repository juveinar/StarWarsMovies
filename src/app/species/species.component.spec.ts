import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { speciesComponent } from './species.component';

describe('SpeciesComponent', () => {
  let component: speciesComponent;
  let fixture: ComponentFixture<speciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ speciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(speciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

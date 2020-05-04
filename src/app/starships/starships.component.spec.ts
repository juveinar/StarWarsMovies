import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { starshipsComponent } from './starships.component';

describe('starshipsComponent', () => {
  let component: starshipsComponent;
  let fixture: ComponentFixture<starshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ starshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(starshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

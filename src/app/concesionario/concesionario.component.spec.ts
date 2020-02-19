import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcesionarioComponent } from './concesionario.component';

describe('ConcesionarioComponent', () => {
  let component: ConcesionarioComponent;
  let fixture: ComponentFixture<ConcesionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcesionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDeMiRespuestasComponent } from './detalles-de-mi-respuestas.component';

describe('DetallesDeMiRespuestasComponent', () => {
  let component: DetallesDeMiRespuestasComponent;
  let fixture: ComponentFixture<DetallesDeMiRespuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesDeMiRespuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesDeMiRespuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

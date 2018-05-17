import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasAnterioresComponent } from './respuestas-anteriores.component';

describe('RespuestasAnterioresComponent', () => {
  let component: RespuestasAnterioresComponent;
  let fixture: ComponentFixture<RespuestasAnterioresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestasAnterioresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestasAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

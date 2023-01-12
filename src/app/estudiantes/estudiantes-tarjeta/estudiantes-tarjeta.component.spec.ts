import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesTarjetaComponent } from './estudiantes-tarjeta.component';

describe('EstudiantesTarjetaComponent', () => {
  let component: EstudiantesTarjetaComponent;
  let fixture: ComponentFixture<EstudiantesTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiantesTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

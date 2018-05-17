import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router/";

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  nombreUsuario = localStorage.getItem("usuario");
  minutes: number;
  seconds: number;
  valor = 0;
  porcentaje: any;
  maximo: any;

  fecha = "Jun 15, 2018";

  equipo1 = "Colombia";
  imgEquipo1= "../../assets/imagenes/banderas/colombia.jpg"
  equipo2 = "Japon";
  imgEquipo2="../../assets/imagenes/banderas/japon.jpg";

  equipo3 = "Rusia";
  imgEquipo3 ="../../assets/imagenes/banderas/rusia.jpg";
  
  equipo4 = "Alemania";
  imgEquipo4="../../assets/imagenes/banderas/alemania.jpg";
  

  equipo5 = "Brasil";
  imgEquipo5="../../assets/imagenes/banderas/brazil.jpg";
  
  equipo6="Argentina";
  imgEquipo6="../../assets/imagenes/banderas/argentina.jpg";






  constructor(
    private router: Router,

  ) {
  }

  ngOnInit() {

  }
  public empezarPreguntas() {
    this.router.navigate(['/responderPreguntas']);

  };






}

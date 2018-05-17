import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-de-mi-respuestas',
  templateUrl: './detalles-de-mi-respuestas.component.html',
  styleUrls: ['./detalles-de-mi-respuestas.component.css']
})
export class DetallesDeMiRespuestasComponent implements OnInit {

  constructor() { }

  equipo1 = "Colombia";
  imgEquipo1= "../../assets/imagenes/banderas/colombia.jpg"
  equipo2 = "Japon";
  imgEquipo2="../../assets/imagenes/banderas/japon.jpg";

  equipo3 = "Rusia";
  imgequipo3 ="../../assets/imagenes/banderas/rusia.jpg";
  
  equipo4 = "Alemania";
  imgequipo4="../../assets/imagenes/banderas/alemania.jpg";
  

  equipo5 = "Brasil";
  imgequipo5="../../assets/imagenes/banderas/brazil.jpg";
  
  equipo6="Argentina";
  imgequipo6="../../assets/imagenes/banderas/argentina.jpg";



  puntajePorPartido =2;

  ngOnInit() {
    
  }

}

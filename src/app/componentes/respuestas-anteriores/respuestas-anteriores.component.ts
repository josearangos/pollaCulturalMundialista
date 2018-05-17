import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respuestas-anteriores',
  templateUrl: './respuestas-anteriores.component.html',
  styleUrls: ['./respuestas-anteriores.component.css']
})
export class RespuestasAnterioresComponent implements OnInit {

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






  constructor() { }

  ngOnInit() {
  }

}

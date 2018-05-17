import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router/";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-responder-preguntas',
  templateUrl: './responder-preguntas.component.html',
  styleUrls: ['./responder-preguntas.component.css']
})
export class ResponderPreguntasComponent implements OnInit {

 
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





  minutes: number;
  seconds: number;
  valor = 0;
  porcentaje:any;
  maximo:any;
  constructor(
    private router: Router,
  ) { 
   
  }

  ngOnInit() {
    this.comezarPregunta();   
  }

  public redireccionarOtra(){
    setTimeout((router: Router) => {
      this.router.navigate(['Preguntas']);
    }, 10000);
  }
  
  comezarPregunta(){
    this.resetTimer();
    this.valor=this.minutes*60 +this.seconds;
    this.maximo=this.minutes*60 +this.seconds;
    setInterval(() => this.tick(), 1000);
    this.redireccionarOtra();

  }


  resetTimer(): void {
    this.minutes = 0;
    this.seconds = 10;
  }  
  private tick(): void {
      this.valor=this.valor-1;
      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetTimer();
        }
      }    
  }   
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import {HeaderComponent} from './componentes/header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './servicios/login-service.service';
import { HttpModule } from '@angular/http';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';

import {Routes, RouterModule, CanActivate } from '@angular/router';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { DetallesDeMiRespuestasComponent } from './componentes/detalles-de-mi-respuestas/detalles-de-mi-respuestas.component';
import { ResponderPreguntasComponent } from './componentes/responder-preguntas/responder-preguntas.component';
import { RespuestasAnterioresComponent } from './componentes/respuestas-anteriores/respuestas-anteriores.component';

// Guardian de rutas, esto para que solo las personas logeadas
import {AuthGuard} from './AuthGuard';



// librerias de terceros
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';






const APP_ROUTES: Routes=[
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  {path:'Preguntas' , component:PreguntasComponent },
  {path:'Login' , component:LoginComponent},
  {path: 'responderPreguntas', component: ResponderPreguntasComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: 'DetallesdeMisRespuestas', component: DetallesDeMiRespuestasComponent},
  {path: 'respuestasAnteriores', component: RespuestasAnterioresComponent}
]




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PreguntasComponent,
    ResultadosComponent,
    BarraNavegacionComponent,
    DetallesDeMiRespuestasComponent,
    ResponderPreguntasComponent,
    RespuestasAnterioresComponent
    
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(), 

    SweetAlert2Module.forRoot()
    
  ],
  providers: [LoginService,AuthGuard],
  bootstrap: [AppComponent,HeaderComponent,DetallesDeMiRespuestasComponent, FooterComponent,LoginComponent,BarraNavegacionComponent, PreguntasComponent]
})
export class AppModule { }

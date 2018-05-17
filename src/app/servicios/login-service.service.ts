import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  private headers = new Headers({});
  private Url: string = 'http://cirene.udea.edu.co/programador/services/ValidarLoginUsuarioAplicacion.php';
  public Url2: string = 'https://my.api.mockaroo.com/user.json?key=8cafeaa0&__method=POST'

  constructor(public http: Http) { }

  public login(usuario: any) {
    let Url = `${this.Url}`
    let iJson = JSON.stringify(usuario);
    return this.http.post(this.Url, iJson, { headers: this.headers })
      .map(r => r.json())
      .catch(this.handleError);
  }



  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

public estaLogeado() {

    let usuario = localStorage.getItem('usuario');

    if (usuario) {
      console.log("consulte");
      return true;
    }

    return false;
  }


}

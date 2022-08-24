import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  _url = 'http://backendbrandon/api/Usuarios'
  constructor(private http: HttpClient
    ) {
   }

   getUsers(){
    let header = new HttpHeaders().set(
      'Type-content','aplication/json')
    return this.http.get(this._url,{
      headers:header
    });
   }
}

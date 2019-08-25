import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendFileService {
  webservice = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  sendForm(obj){
    return this.http.post( `${this.webservice}/saveFile`, obj )
  }

  openFile( name ){
    window.open( `${this.webservice}/arquivo/${name}`, '_blank' )
  }
}

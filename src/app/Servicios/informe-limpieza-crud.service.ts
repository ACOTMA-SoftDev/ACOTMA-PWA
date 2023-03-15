import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InformeLimpiezaCrudService{

  constructor(private http:HttpClient) { }

  getInformeLimpieza(): Observable<any>{
    return this.http.get<any>('api/Informe_Limpieza')
    }

}

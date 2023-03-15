import { Injectable, Type } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UsuariosCrudService{

  constructor(private http:HttpClient) {}

   getUsuarios(): Observable<any>{
    return this.http.get<any>('/api/Usuarios')
    }

   }

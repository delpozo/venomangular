import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Fournisseur } from './app/Model/Fournisseur';


import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FournisseursService {
  constructor(private http: HttpClient) { }

  getAll() {
     //return this.http.get('http://localhost/symfony/web/app_dev.php/fournisseurs/').subscribe(res=> {localStorage.setItem('list',JSON.stringify(res))});
     return this.http.get<Fournisseur[]>('http://localhost/symfony/web/app_dev.php/fournisseurs/');
  }

}

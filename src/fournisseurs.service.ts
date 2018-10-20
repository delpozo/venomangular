import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FournisseursService {
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<Fournisseurs[]>('http://localhost/symfony/web/app_dev.php/fournisseurs/');
  }

}

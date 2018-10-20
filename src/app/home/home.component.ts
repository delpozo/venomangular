import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../Model/Fournisseur';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public fournisseurs: Fournisseur[];
  constructor() { }

  ngOnInit() {
    
    this.fournisseurs = [{nom: 'seif',prenom : 'bahri'},{nom:'dhaker',prenom:'souid'}]
  }

}

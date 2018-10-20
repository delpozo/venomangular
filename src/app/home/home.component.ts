import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../Model/Fournisseur';
import { FournisseursService } from 'src/fournisseurs.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public fournisseurs: Fournisseur[];
  constructor(public fournisseurservice:FournisseursService) { }

  ngOnInit() {
    
    console.log(this.fournisseurservice.getAll().subscribe(data=>{this.fournisseurs=data}));
   // this.fournisseurs = [{id: 1,nom: 'seif',prenom : 'bahri'},{id:2,nom:'dhaker',prenom:'souid'}]
  }

}

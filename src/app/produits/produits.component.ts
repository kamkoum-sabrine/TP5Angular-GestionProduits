import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model'
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: Produit[];
  constructor(private produitService: ProduitService) {
    this.produits = this.produitService.listProduits()


  }
  supprimerProduit(p: Produit) {
    let conf = confirm('Are you sure')
    if (conf)
      //console.log(p);
      this.produitService.supprimerProduit(p);
  }
  ngOnInit(): void {
  }

}

import { Panier } from "./Panier"
import { Produit } from "./Produit"

export class LignePanier {
  id !:number
  produit !:Produit
  quantite !:number
  total !: number
  panier !: Panier;
}

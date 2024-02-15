import { LignePanier } from "./LignePanier"
import { User } from "./User";

export class Panier {
  id !: number;
  total !: number;
  lignepaniers !: LignePanier[];
  user !: User;
}

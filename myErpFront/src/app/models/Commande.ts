import { Panier } from "./Panier"
import { User } from "./User"

export class Commande {
  id !:number
  date_creation !: Date
  ville!: string
  numero !:string
  adresse !:string
  panier !:Panier
  user !:User
}

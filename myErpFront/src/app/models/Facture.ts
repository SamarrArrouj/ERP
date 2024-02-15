import { Commande } from "./Commande"
import { User } from "./User"

export class Facture {
  numFacture!: number
  title!: string
  dateFacture!: Date
  commande !: Commande
  budget_max !: number
  reglement !: string

}

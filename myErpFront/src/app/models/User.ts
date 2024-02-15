import { Facture } from "./Facture";
import { Role } from "./Role";

export class User {
  id!: number;
  username!: string;
  email!: string;
  password!: string;
  roles!: Role[];
  factures !: Facture[]
}

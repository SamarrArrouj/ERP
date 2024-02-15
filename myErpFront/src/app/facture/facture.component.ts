import { Component } from '@angular/core';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
numFacture!:number;
dateFacture!:Date;
price!:number;
title!:String
}

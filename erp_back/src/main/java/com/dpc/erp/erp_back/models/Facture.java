package com.dpc.erp.erp_back.models;

import com.dpc.erp.erp_back.ENUM.EReglement;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Facture {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
   private  Long numFacture;
   private String title;
   private Date dateFacture = new Date();
   @OneToOne(cascade = CascadeType.MERGE)
    Commande commande;
   private double budget_max;

   @Enumerated(EnumType.STRING)
   private EReglement reglement ;
}

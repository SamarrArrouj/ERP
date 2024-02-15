package com.dpc.erp.erp_back.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Long id;
    private Date date_creation = new Date();
    private String ville;
    private String adresse;
    private String numero;
    @OneToOne(cascade = CascadeType.MERGE)
    private Panier panier;

    @ManyToOne(cascade = CascadeType.MERGE)
    User user;

}

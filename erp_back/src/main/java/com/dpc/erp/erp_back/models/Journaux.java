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
public class Journaux {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Long numJournaux;
    private Date dateCreation = new Date();
    private  String libelle;
    @Column(columnDefinition = "LONGTEXT")
    private  String rapport;

}

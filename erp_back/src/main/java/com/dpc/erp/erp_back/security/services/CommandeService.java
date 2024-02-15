package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.Commande;
import com.dpc.erp.erp_back.models.User;

import java.util.List;

public interface CommandeService {
    Commande AddCommande(Commande commande);
    void  deleteCommande (Long id);
    List<Commande> getCommandes();
    Commande getCommanderById(Long id);
    Commande updateCommande(Long id, Commande commande);
}

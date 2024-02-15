package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.LignePanier;
import com.dpc.erp.erp_back.models.Panier;
import com.dpc.erp.erp_back.models.Produit;
import com.dpc.erp.erp_back.models.User;

import java.util.List;

public interface PanierService {

    Panier Addpanier(Long userId, LignePanier lignePanier);
    void Deletepanier (Long id);
    List<Panier> getPanier();
    Panier getpanierById(Long id);
    Panier updatepanier(Panier panier);
}

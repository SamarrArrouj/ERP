package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.LignePanier;
import com.dpc.erp.erp_back.models.Panier;

import java.util.List;

public interface LignePanierService {
    LignePanier AddlignePanier(LignePanier lignePanier);
    void DeletelignePanier (Long id);
    List<LignePanier> getLignepanier();
    LignePanier getlignePanierById(Long id);
    LignePanier updatelignePanier(LignePanier lignePanier,Long id);
}

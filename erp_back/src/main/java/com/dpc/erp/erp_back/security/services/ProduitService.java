package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.Produit;


import java.util.List;

public interface ProduitService {
    Produit Addproduit(Produit produit);
    void Deleteproduit (Long id);
    List<Produit> getProduits();
    Produit getProduitsById(Long id);
    Produit updateProduit(Long id,Produit produit);
}

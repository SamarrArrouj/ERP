package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.Produit;
import com.dpc.erp.erp_back.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitServiceImp implements ProduitService{
    @Autowired
    ProduitRepository produitRepository;
    @Override
    public Produit Addproduit(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public void Deleteproduit(Long id) {
    produitRepository.deleteById(id);
    }

    @Override
    public List<Produit> getProduits() {
        return produitRepository.findAll();
    }

    @Override
    public Produit getProduitsById(Long id) {
        return produitRepository.findById(id).get();
    }

    @Override
    public Produit updateProduit(Long id, Produit produit) {
        Produit produitexist = getProduitsById(id);
        produitexist.setNom(produit.getNom());
        produitexist.setImage(produit.getImage());
        produitexist.setPrix(produit.getPrix());
        return  produitRepository.save(produitexist);
    }
}

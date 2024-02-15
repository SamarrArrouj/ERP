package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.LignePanier;
import com.dpc.erp.erp_back.models.Panier;
import com.dpc.erp.erp_back.repository.LignePanierRepository;
import com.dpc.erp.erp_back.repository.PanierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LignePanierServiceImp implements LignePanierService {
    @Autowired
    LignePanierRepository lignePanierRepository;
    @Autowired
    PanierRepository panierRepository;

    @Override
    public LignePanier AddlignePanier(LignePanier lignePanier) {
        LignePanier ligne = lignePanierRepository.save(lignePanier);
        List<LignePanier> list = new ArrayList<>();
        list.add(ligne);
        double total =0;
        Panier panier = new Panier();
        panier.setLignepaniers(list);
        for (LignePanier lignePanier1 : list){
            total += lignePanier1.getTotal();
        }
        panier.setTotal(total);
        panierRepository.save(panier);
        return ligne;


    }

    @Override
    public void DeletelignePanier(Long id) {
        LignePanier lignepanier = lignePanierRepository.findById(id).orElse(null);
        if(lignepanier != null) {
            Panier panier = lignepanier.getPanier();
            panier.setTotal(panier.getTotal() - lignepanier.getTotal());
            panierRepository.save(panier);
            lignePanierRepository.deleteById(id);
        }
    }

    @Override
    public List<LignePanier> getLignepanier() {
        return lignePanierRepository.findAll();
    }

    @Override
    public LignePanier getlignePanierById(Long id) {
       LignePanier ligne =  lignePanierRepository.findById(id).orElse(null);
        if(ligne != null){
            return ligne;
        }
        return null;
    }

    @Override
    public LignePanier updatelignePanier( LignePanier lignePanier,Long id) {
        lignePanier.setTotal(lignePanier.getQuantite() * lignePanier.getProduit().getPrix());
          lignePanierRepository.save(lignePanier);
        Optional<Panier> Optionalpanier = panierRepository.findById(id);
        double sum = 0;
        if (Optionalpanier.isPresent()) {
             Panier panier = Optionalpanier.get();
            for (LignePanier ligne : panier.getLignepaniers()) {
                sum += ligne.getTotal();
            }
            panier.setTotal(sum);
            panierRepository.save(panier);
            lignePanier.setPanier(panier);
            lignePanierRepository.save(lignePanier);

            return lignePanier;
        }
        return null;
    }
}

package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.LignePanier;
import com.dpc.erp.erp_back.models.Panier;
import com.dpc.erp.erp_back.models.User;
import com.dpc.erp.erp_back.repository.LignePanierRepository;
import com.dpc.erp.erp_back.repository.PanierRepository;
import com.dpc.erp.erp_back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class PanierServiceImp implements PanierService{
    @Autowired
    PanierRepository panierRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    LignePanierRepository lignePanierRepository;
    @Override
    public Panier Addpanier(Long userId, LignePanier lignePanier) {
        double sum = 0;
           lignePanierRepository.save(lignePanier);
           User user = userRepository.findById(userId).get();
          List<LignePanier> lignepaniers = new ArrayList<>();
            Panier panier = panierRepository.findPanierByuserId(userId);
            if (panier != null){
                lignePanier.setPanier(panier);
                lignepaniers = panier.getLignepaniers();
                lignepaniers.add(lignePanier);
                panier.setLignepaniers(lignepaniers);
                for( LignePanier ligne:  panier.getLignepaniers()){
                    sum += ligne.getTotal();
                }
                panier.setTotal(sum);
                return panierRepository.save(panier);
            }
            Panier Newpanier = new Panier();
             panierRepository.save(Newpanier);
             lignePanier.setPanier(Newpanier);
            lignepaniers.add(lignePanier);
           Newpanier.setLignepaniers(lignepaniers);
            Newpanier.setUser(user);
          for( LignePanier ligne:  Newpanier.getLignepaniers()){
            sum += ligne.getTotal();
           }

           Newpanier.setTotal(sum);
          return   panierRepository.save(Newpanier);
    }

    @Override
    public void Deletepanier(Long id) {

    }

    @Override
    public List<Panier> getPanier() {
        return panierRepository.findAll();
    }

    @Override
    public Panier getpanierById(Long id) {
        return null;
    }

    @Override
    public Panier updatepanier( Panier panier) {
       double sum = 0;
        for( LignePanier ligne:  panier.getLignepaniers()){
            ligne.setTotal(ligne.getQuantite()*ligne.getProduit().getPrix());
            sum += ligne.getTotal();
        }
        panier.setTotal(sum);
        return panierRepository.save(panier);


    }
}

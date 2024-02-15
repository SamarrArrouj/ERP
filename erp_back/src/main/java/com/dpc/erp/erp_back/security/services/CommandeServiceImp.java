package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.Commande;
import com.dpc.erp.erp_back.models.Panier;
import com.dpc.erp.erp_back.models.User;
import com.dpc.erp.erp_back.repository.CommandeRepository;
import com.dpc.erp.erp_back.repository.PanierRepository;
import com.dpc.erp.erp_back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommandeServiceImp implements CommandeService {
    @Autowired
    CommandeRepository commandeRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PanierRepository panierRepository;
    @Override
    public Commande AddCommande(Commande commande) {
        return commandeRepository.save(commande);
    }

    @Override
    public void deleteCommande(Long id) {
    commandeRepository.deleteById(id);
    }

    @Override
    public List<Commande> getCommandes() {
        return commandeRepository.findAll();
    }

    @Override
    public Commande getCommanderById(Long id) {
        return commandeRepository.findById(id).get();
    }

    @Override
    public Commande updateCommande(Long id, Commande commande) {
        return null;
    }
}

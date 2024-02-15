package com.dpc.erp.erp_back.controllers;

import com.dpc.erp.erp_back.models.Commande;
import com.dpc.erp.erp_back.models.Facture;
import com.dpc.erp.erp_back.models.Panier;
import com.dpc.erp.erp_back.security.services.CommandeService;
import com.dpc.erp.erp_back.security.services.PanierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/commande/")
public class CommandeController {


    @Autowired
    CommandeService commandeService;
    @GetMapping("getAll")
    public List<Commande> getAllCommandes(){
        return commandeService.getCommandes();
    }

    @PostMapping("post")
    public Commande addCommande(@RequestBody Commande commande){
        return commandeService.AddCommande(commande);

    }
    @GetMapping("get/{num}")
    public Commande getCommande(@PathVariable Long num){
    return commandeService.getCommanderById(num);
    }

    @DeleteMapping("delete/{num}")
    public void deleteCommande(@PathVariable Long num){
        commandeService.deleteCommande(num);
    }
}

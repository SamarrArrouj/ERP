package com.dpc.erp.erp_back.controllers;

import com.dpc.erp.erp_back.models.LignePanier;
import com.dpc.erp.erp_back.models.Panier;
import com.dpc.erp.erp_back.models.Produit;
import com.dpc.erp.erp_back.security.services.LignePanierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/lignepanier/")
public class LignePanierController {
    @Autowired
    LignePanierService lignePanierService;
    @GetMapping("getAll")
    public List<LignePanier> getAllLignesPaniers(){
        return lignePanierService.getLignepanier();
    }

    @PostMapping("post")
    @ResponseBody
    public LignePanier addLignePanier(@RequestBody LignePanier lPanier){
        return lignePanierService.AddlignePanier(lPanier);

    }
    @GetMapping("get/{id}")
    public LignePanier getlignePanierById(@PathVariable Long id) {
        return lignePanierService.getlignePanierById(id);
    }
    @DeleteMapping("delete/{id}")
    public void deleteFacture(@PathVariable Long id){
        lignePanierService.DeletelignePanier(id);
    }

    @PutMapping("edit/{id}")
    public LignePanier edit(@RequestBody LignePanier lignePanier,@PathVariable Long id){
        return lignePanierService.updatelignePanier(lignePanier,id);
    }
}

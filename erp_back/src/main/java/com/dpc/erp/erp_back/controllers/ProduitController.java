package com.dpc.erp.erp_back.controllers;
import com.dpc.erp.erp_back.models.Produit;
import com.dpc.erp.erp_back.security.services.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/produit/")
public class ProduitController {
    @Autowired
    ProduitService produitService;
    @GetMapping("get/{id}")
    public Produit getProduit(@PathVariable Long id){
        return produitService.getProduitsById(id);
    }

    @GetMapping("getAll")
    public List<Produit> getAllProduits(){
        return produitService.getProduits();
    }

    @PostMapping("post")
    @ResponseBody
    public Produit addProduit(@RequestBody Produit produit){
        return produitService.Addproduit(produit);

    }

    @DeleteMapping("delete/{id}")
    public void deleteFacture(@PathVariable Long id){
        produitService.Deleteproduit(id);
    }

    @PutMapping("put/{id}")
    public Produit putProduit(@PathVariable Long id,@RequestBody Produit produit){
        return produitService.updateProduit(id,produit);
    }

}

package com.dpc.erp.erp_back.controllers;

import com.dpc.erp.erp_back.models.LignePanier;
import com.dpc.erp.erp_back.models.Panier;
import com.dpc.erp.erp_back.security.services.LignePanierService;
import com.dpc.erp.erp_back.security.services.PanierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/panier/")
public class PanierController {

    @Autowired
    PanierService panierService;
    @GetMapping("getAll")
    public List<Panier> getAllPaniers(){
        return panierService.getPanier();
    }

    @PostMapping("post/{userId}")
    public Panier addPanier(@PathVariable Long userId,@RequestBody LignePanier lignePanier){
        return panierService.Addpanier(userId,lignePanier);

    }
    @PutMapping()
    public Panier editPanier(@RequestBody Panier panier){
        return panierService.updatepanier(panier);

    }
}

package com.dpc.erp.erp_back.controllers;

import com.dpc.erp.erp_back.ENUM.EReglement;
import com.dpc.erp.erp_back.models.Facture;
import com.dpc.erp.erp_back.security.services.IFactureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping("/facture/")
public class FactureController {
    @Autowired
    IFactureService iFactureService;

    @GetMapping("reglement")
    public List<String> getReglements() {
        return Arrays.stream(EReglement.values())
                .map(EReglement::name)
                .collect(Collectors.toList());}
    @GetMapping("get/{num}")
    public Facture getFacture(@PathVariable Long num){
        Facture facture=iFactureService.getFactureByNum(num);
        return facture;
    }

    @GetMapping("getAll")
    public List<Facture> getAllFacture(){
        List<Facture> factures= iFactureService.getAllFactures();
        return factures;
    }

    @PostMapping("post")
    @ResponseBody
    public Facture addFacture(@RequestBody Facture facture){
        Facture saveFacture= iFactureService.addFacture(facture);
        return saveFacture;
    }

    @DeleteMapping("delete/{num}")
    public void deleteFacture(@PathVariable Long num){
        iFactureService.deleteFacture(num);
    }

    @PutMapping("put")
    public Facture putFacture(@RequestBody Facture facture){
        Facture updatedFacture = iFactureService.updateFacture(facture);
        return updatedFacture;
    }
}

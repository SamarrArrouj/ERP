package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.ENUM.EReglement;
import com.dpc.erp.erp_back.models.Facture;
import com.dpc.erp.erp_back.repository.FactureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FactureServiceImp implements IFactureService{
    @Autowired
    FactureRepository factureRepository;


    @Override
    public Facture getFactureByNum(Long num) {
        Facture getFacture= factureRepository.findById(num).get();
        return getFacture;
    }

    @Override
    public List<Facture> getAllFactures() {
        List<Facture> factures = (List<Facture>) factureRepository.findAll();
        return factures;
    }

    @Override
    public Facture addFacture(Facture facture) {
        facture.setReglement(EReglement.NON_PAYEE);
        facture.setBudget_max(1000);
        Facture saveFacture = factureRepository.save(facture);
        return saveFacture;
    }

    @Override
    public Facture updateFacture(Facture facture) {

        Facture getFacture = factureRepository.findById(facture.getNumFacture()).get();
        getFacture.setNumFacture((facture.getNumFacture()));
        getFacture.setTitle(facture.getTitle());
        getFacture.setDateFacture(facture.getDateFacture());
        getFacture.setReglement(facture.getReglement());
         return factureRepository.save(getFacture);

    }

    @Override
    public void deleteFacture(Long id) {
        Facture facture = factureRepository.findById(id).get();
        factureRepository.delete(facture);

    }
}

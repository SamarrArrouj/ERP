package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.Facture;

import java.util.List;

public interface IFactureService {

    public Facture getFactureByNum(Long num);
    public List<Facture> getAllFactures();
    public Facture addFacture(Facture facture);
    public Facture updateFacture(Facture facture);

    public void deleteFacture(Long id);
}

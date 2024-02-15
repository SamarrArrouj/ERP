package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.Journaux;
import com.dpc.erp.erp_back.repository.JouranauxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class JournauxServiceImp implements JournauxService{
    @Autowired
    JouranauxRepository jouranauxRepository;
    @Override
    public Journaux getjournauxByNum(Long num) {
      Journaux  journaux = jouranauxRepository.findById(num).orElse(null);
        if (journaux != null){
            return journaux;
        }
        return null;
    }

    @Override
    public List<Journaux> getAllJournaux() {
        return (List<Journaux>) jouranauxRepository.findAll();
    }

    @Override
    public Journaux addJournaux(Journaux journaux) {
        return jouranauxRepository.save(journaux);
    }

    @Override
    public Journaux updateJournaux(Journaux journaux,Long num) {
     Journaux journaux_exist = getjournauxByNum(num);
        journaux_exist.setLibelle(journaux.getLibelle());
        journaux_exist.setRapport(journaux.getRapport());
        return journaux_exist;
    }

    @Override
    public void deleteJournaux(Long num) {
     jouranauxRepository.deleteById(num);
    }

    @Override
    public void deleteAllJournaux() {
    jouranauxRepository.deleteAll();
    }

    @Override
    public List<Journaux> getJournauxByDate(Date date) {
        return jouranauxRepository.findByDateCreation(date);
    }
}

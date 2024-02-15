package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.Tutorial;

import java.util.List;

public interface TutorialService {
    Tutorial create(Tutorial tutorial);
    List<Tutorial> lire();
    Tutorial modifier(Long id,Tutorial tutorial);
    String delete(Long id);
    Tutorial getbyId(Long id);
    String deleteAllTutorials();
    List<Tutorial> findTutoByPublished(boolean published);
    List<Tutorial> findByTitleContaining (String title);
}

package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.Tutorial;
import com.dpc.erp.erp_back.repository.TutorialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TutorialServiceImpl implements TutorialService{
    @Autowired
    TutorialRepository tutorialRepository;
    @Override
    public Tutorial create(Tutorial tutorial) {
        tutorial.setPublished(true);
        return tutorialRepository.save(tutorial);
    }

    @Override
    public List<Tutorial> lire() {
        return tutorialRepository.findAll();
    }

    @Override
    public Tutorial modifier(Long id, Tutorial tutorial) {
        Tutorial tutorial1 = tutorialRepository.findById(id).get();
        tutorial1.setTitle(tutorial.getTitle());
        tutorial1.setDescription(tutorial.getDescription());
        return tutorialRepository.save(tutorial1);}

    @Override
    public String delete(Long id) {
          tutorialRepository.deleteById(id);
          return "Tutorial with id :{id} deleted succefully";

    }

    @Override
    public Tutorial getbyId(Long id) {
        return tutorialRepository.findById(id).get();
    }

    @Override
    public String deleteAllTutorials() {
         tutorialRepository.deleteAll();
         return "tutorials wa deleted successfully";
    }

    @Override
    public List<Tutorial> findTutoByPublished(boolean published) {
        return  tutorialRepository.findByPublished( published);
    }

    @Override
    public  List<Tutorial> findByTitleContaining(String title) {
        return tutorialRepository.findByTitle(title) ;
    }
}

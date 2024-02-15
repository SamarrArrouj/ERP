package com.dpc.erp.erp_back.controllers;


import com.dpc.erp.erp_back.models.Tutorial;
import com.dpc.erp.erp_back.repository.TutorialRepository;
import com.dpc.erp.erp_back.security.services.TutorialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/tutorials")
public class TutorialController {

    @Autowired
    TutorialService tutorialService;

    @GetMapping
    public ResponseEntity<List<Tutorial>> getAllTutorials() {

        return ResponseEntity.ok(tutorialService.lire());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tutorial> getTutorialById(@PathVariable("id") long id) {

        return ResponseEntity.ok(tutorialService.getbyId(id))  ;
    }

    @PostMapping("/Addtutorial")
    public ResponseEntity<Tutorial> createTutorial(@RequestBody Tutorial tutorial) {

        return ResponseEntity.ok(tutorialService.create(tutorial));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tutorial> updateTutorial(@PathVariable("id") long id, @RequestBody Tutorial tutorial) {

        return ResponseEntity.ok(tutorialService.modifier(id,tutorial));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTutorial(@PathVariable("id") long id) {

        return ResponseEntity.ok(tutorialService.delete(id));
    }

    @DeleteMapping
    public ResponseEntity<String> deleteAllTutorials() {

        return ResponseEntity.ok(tutorialService.deleteAllTutorials());
    }

    @GetMapping("/published")
    public ResponseEntity<List<Tutorial>> findByPublished(@RequestBody boolean published) {

        return ResponseEntity.ok(tutorialService.findTutoByPublished(published));
    }
    @GetMapping("findbytitle/{title}")
    public  List<Tutorial> findByTitleContaining(@PathVariable String title) {
        return tutorialService.findByTitleContaining(title);
    }
}
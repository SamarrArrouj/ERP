package com.dpc.erp.erp_back.controllers;

import com.dpc.erp.erp_back.models.Facture;
import com.dpc.erp.erp_back.models.Journaux;
import com.dpc.erp.erp_back.security.services.IFactureService;
import com.dpc.erp.erp_back.security.services.JournauxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/journaux/")
public class JournauxController {
    @Autowired
    JournauxService journauxService;

    @GetMapping("get/{num}")
    public Journaux getJournaux(@PathVariable Long num){
       return journauxService.getjournauxByNum(num);

    }
    @GetMapping("getBydate/{date}")
    public List<Journaux> getJournauxByDate(@PathVariable Date date){
       return journauxService.getJournauxByDate(date);
    }

    @GetMapping("getAll")
    public List<Journaux> getAllJournaux(){
        return journauxService.getAllJournaux();

    }
    @PostMapping("post")
    @ResponseBody
    public Journaux addJournaux(@RequestBody Journaux journaux){
        return journauxService.addJournaux(journaux);
    }

    @DeleteMapping("delete/{num}")
    public void deleteJournaux(@PathVariable Long num){
        journauxService.deleteJournaux(num);
    }
 @DeleteMapping("deleteAll")
    public void deleteAllJournaux(){
        journauxService.deleteAllJournaux();
    }

    @PutMapping("put")
    public Journaux putJournaux(@RequestBody Journaux journaux , @RequestParam Long num){
        return journauxService.updateJournaux(journaux,num);
    }
}

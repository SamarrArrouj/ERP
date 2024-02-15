package com.dpc.erp.erp_back.security.services;


import com.dpc.erp.erp_back.models.Journaux;

import java.util.Date;
import java.util.List;

public interface JournauxService {
     Journaux getjournauxByNum(Long num);
     List<Journaux> getAllJournaux();
     Journaux addJournaux(Journaux journaux);
     Journaux updateJournaux(Journaux journaux,Long num);

     void deleteJournaux(Long num);
     void deleteAllJournaux();
     List<Journaux> getJournauxByDate(Date date);
}

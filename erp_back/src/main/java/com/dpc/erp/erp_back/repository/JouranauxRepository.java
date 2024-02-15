package com.dpc.erp.erp_back.repository;
import com.dpc.erp.erp_back.models.Journaux;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface JouranauxRepository extends CrudRepository<Journaux, Long> {
    List<Journaux> findByDateCreation(Date date_creation);
}

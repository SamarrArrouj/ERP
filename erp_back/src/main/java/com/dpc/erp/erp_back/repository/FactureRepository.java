package com.dpc.erp.erp_back.repository;

import com.dpc.erp.erp_back.models.Facture;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FactureRepository extends CrudRepository<Facture, Long> {
//    void delete(Long id);
}

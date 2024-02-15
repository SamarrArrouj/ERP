package com.dpc.erp.erp_back.repository;

import com.dpc.erp.erp_back.models.LignePanier;
import com.dpc.erp.erp_back.models.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LignePanierRepository extends JpaRepository<LignePanier, Long> {
}

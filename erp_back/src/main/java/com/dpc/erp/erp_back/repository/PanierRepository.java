package com.dpc.erp.erp_back.repository;

import com.dpc.erp.erp_back.models.Panier;
import com.dpc.erp.erp_back.models.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PanierRepository  extends JpaRepository<Panier, Long> {
    @Query(" SELECT p FROM Panier p WHERE p.user.id = :id")
    Panier findPanierByuserId(@Param("id") Long id);


}

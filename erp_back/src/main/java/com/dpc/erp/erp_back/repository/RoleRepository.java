package com.dpc.erp.erp_back.repository;

import com.dpc.erp.erp_back.ENUM.ERole;
import com.dpc.erp.erp_back.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}


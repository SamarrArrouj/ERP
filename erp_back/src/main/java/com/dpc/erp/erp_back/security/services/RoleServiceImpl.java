package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.Role;
import com.dpc.erp.erp_back.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    RoleRepository roleRepository;
    @Override
    public Role Addrole(Role role) {
        return roleRepository.save(role);
    }
    @Override
    public Role Deleterole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public List<Role> getRoles() {
        return roleRepository.findAll();
    }
}

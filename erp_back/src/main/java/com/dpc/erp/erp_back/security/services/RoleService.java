package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.Role;
import com.dpc.erp.erp_back.models.User;

import java.util.List;

public interface RoleService {

    Role Addrole(Role role);
    Role Deleterole (Role role);
   List<Role> getRoles();

}

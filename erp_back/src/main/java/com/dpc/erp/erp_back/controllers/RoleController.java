package com.dpc.erp.erp_back.controllers;

import com.dpc.erp.erp_back.models.Role;
import com.dpc.erp.erp_back.security.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class RoleController {
    @Autowired
    RoleService roleService;

    @GetMapping("/roles")
    public List<Role> getAllRoles(){
      return  roleService.getRoles();
    }
    @PostMapping("/Deleterole/{id}")
    public Role DeleteRole (@RequestBody Role role){
        return roleService.Deleterole(role);
    }
    @PostMapping("/Addrole")
    public Role AddRole (@RequestBody Role role){
        return roleService.Addrole(role);
    }
}

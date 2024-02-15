package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.User;

import java.util.List;

public interface UserService {
    User create(User user);
    List<User> lire();
    User modifier(User user);
    String delete(Long id);
    User getbyId(Long id);

}

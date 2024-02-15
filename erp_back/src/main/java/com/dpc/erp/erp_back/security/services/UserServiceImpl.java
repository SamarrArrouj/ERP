package com.dpc.erp.erp_back.security.services;

import com.dpc.erp.erp_back.models.User;

import com.dpc.erp.erp_back.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    @Autowired
    PasswordEncoder encoder;
    @Override
    public User create(User user) {

        user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public List<User> lire() {
        return userRepository.findAll();
    }

    @Override
    public User modifier( User user) {
        return userRepository.findById(user.getId())
                .map(u-> {
                    u.setUsername(user.getUsername());
                    u.setEmail(user.getEmail());
                    u.setId(user.getId());
                    u.setPassword(user.getPassword());
                    u.setRoles(user.getRoles());
                    return userRepository.save(u);
                }).orElseThrow(() -> new RuntimeException("user non trouvé !"));
    }

    @Override
    public String delete(Long id) {
        userRepository.deleteById(id);
        return "user supprimé !";
    }

    @Override
    public User getbyId(Long id) {
        return userRepository.findById(id).get();
    }
}

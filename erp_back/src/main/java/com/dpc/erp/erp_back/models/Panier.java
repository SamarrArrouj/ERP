package com.dpc.erp.erp_back.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Panier {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Long id;
    @OneToMany(mappedBy = "panier",fetch = FetchType.EAGER)
     @JsonManagedReference
    private List<LignePanier> lignepaniers;
    private double total =0;
    @OneToOne (cascade = CascadeType.MERGE)
    User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<LignePanier> getLignepaniers() {
        return lignepaniers;
    }

    public void setLignepaniers(List<LignePanier> lignepaniers) {
        this.lignepaniers = lignepaniers;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

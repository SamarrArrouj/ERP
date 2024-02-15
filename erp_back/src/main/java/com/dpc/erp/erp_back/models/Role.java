package com.dpc.erp.erp_back.models;

import com.dpc.erp.erp_back.ENUM.ERole;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(length = 20)
    @Enumerated(EnumType.STRING)
    private ERole name;

    public Role(Integer id, ERole name) {
        this.id = id;
        this.name = name;
    }

    public Role() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ERole getName() {
        return name;
    }

    public void setName(ERole name) {
        this.name = name;
    }
}

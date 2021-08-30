package com.example.warehousemanagementsystem.model;

import javax.persistence.*;

@Entity
@Table(name = "store_item")
public class Store_Item {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int Item_ID;

    @Column(name = "Item_Name")
    private String Item_Name;

    public Store_Item(){

    }

}

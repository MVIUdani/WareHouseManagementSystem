package com.example.warehousemanagementsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.warehousemanagementsystem.model.Store_Item;

public interface Store_ItemRepository  extends JpaRepository<Store_Item, int> {
    List<Store_Item> findByItem_NameContaining(String Item_Name);
}

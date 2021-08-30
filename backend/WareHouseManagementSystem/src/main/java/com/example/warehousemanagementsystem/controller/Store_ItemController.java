package com.example.warehousemanagementsystem.controller;

import com.example.warehousemanagementsystem.model.Store_Item;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class Store_ItemController {
    @Autowired
    Store_ItemRepository storeItemRepository;

    @GetMapping("/store_item")
    public ResponseEntity<List<Store_Item>> getAllStore_Item(@RequestParam(required = false) String Item_Name) {
    ...
    }

    @GetMapping("/store_item/{Item_ID}")
    public ResponseEntity<Store_Item> getStore_ItemById(@PathVariable("Item_ID") int Item_ID) {
    ...
    }

    @PostMapping("/store_item")
    public ResponseEntity<Store_Item> createStore_Item(@RequestBody Store_Item store_item) {
    ...
    }

    @PutMapping("/store_item/{Item_ID}")
    public ResponseEntity<Store_Item> updateStore_Item(@PathVariable("Item_ID") int Item_ID, @RequestBody Store_Item store_item) {
    ...
    }

    @DeleteMapping("/store_item/{Item_ID}")
    public ResponseEntity<HttpStatus> deleteStore_Item(@PathVariable("Item_ID") int Item_ID) {
    ...
    }

    @DeleteMapping("/store_item")
    public ResponseEntity<HttpStatus> deleteAllStore_Item() {
    ...
    }

}

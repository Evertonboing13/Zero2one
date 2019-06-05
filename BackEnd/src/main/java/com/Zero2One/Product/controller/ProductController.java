package com.Zero2One.Product.controller;


import com.Zero2One.Product.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    private Map<String,Product> products = new HashMap<>();

    public  ProductController(){
        Product celular = new Product();
        celular.setId("1A");
        celular.setName("Moto x");
        celular.setDescription("Novo moto x 2");
        celular.setPrice(1999.99);


        Product notebook = new Product();
        celular.setId("2A");
        celular.setName("Asus");
        celular.setDescription("ASUS É O BICHO");
        celular.setPrice(1999.85);

        products.put("1A",celular);
        products.put("2A",notebook);

    }

    @GetMapping
    public Collection<Product> get(){
        return products.values();
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable("id") String id) {
        return  products.get(id);
    }

    @PostMapping
    public  Product create(@RequestBody Product product){
        products.put(product.getId(),product);
        return product;
    }

}

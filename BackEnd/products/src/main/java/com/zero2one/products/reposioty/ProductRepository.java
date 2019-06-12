package com.zero2one.products.reposioty;

import com.zero2one.products.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {

    List<Product> findAllByDescription(String description);

    List<Product> findAllByDescriptionAndName(String description, String name);


}

package com.zero2one.products.controller;

import com.zero2one.products.model.Product;
import com.zero2one.products.reposioty.ProductRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)


public class ProductsControllerTest {

    @InjectMocks
    private  ProductsController controller;

    @Mock
    private ProductRepository repository;

    @Test
    public void deleteTest(){
        String expectedValue = "50";


        controller.delete(expectedValue);

        Mockito.verify(repository).deleteById(expectedValue);
    }
    @Test
    public void create(){
        Product product = new Product(); //ARRANGE
        controller.create(product); //ACT
        Mockito.verify(repository).save(product); //ASSERT

    }

    @Test
    public void getByDescription(){
        String description = "Descrição";
        controller.get(description);
        Mockito.verify(repository).findAllByDescription(description);


    }

    @Test
    public void getAll(){
        String description = null;
        controller.get(description);
        Mockito.verify(repository).findAll();

    }
}




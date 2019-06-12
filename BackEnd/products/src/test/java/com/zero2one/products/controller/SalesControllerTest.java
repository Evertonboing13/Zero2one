package com.zero2one.products.controller;

import com.zero2one.products.model.Product;
import com.zero2one.products.model.Sale;
import com.zero2one.products.reposioty.ProductRepository;
import com.zero2one.products.service.SaleService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)

public class SalesControllerTest {

    @InjectMocks
    private  SalesController controller;

    @Mock
    private SaleService saleService;

    @Test
    public void get(){

        controller.get();
        Mockito.verify(saleService).findAll();

    }

    @Test
    public void create(){
        Sale sale = new Sale(); //ARRANGE
        controller.create(sale); //ACT
        Mockito.verify(saleService).save(sale); //ASSERT

    }


}

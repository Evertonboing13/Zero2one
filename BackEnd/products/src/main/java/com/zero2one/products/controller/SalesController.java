package com.zero2one.products.controller;

import com.zero2one.products.model.Sale;
import com.zero2one.products.service.SaleService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/sales")
@Api(tags = "Sales")
public class SalesController {

    @Autowired
    private SaleService saleService;

    public SalesController(SaleService saleService) {
        this.saleService = saleService;
    }

    @GetMapping
    @ApiOperation("Listagem de vendas")
    public Collection < Sale > get() {
        return saleService.findAll();
    }

    @PostMapping
    @ApiOperation("Adição de venda")
    public Sale create(@RequestBody Sale sale) {
        return saleService.save(sale);
    }

}
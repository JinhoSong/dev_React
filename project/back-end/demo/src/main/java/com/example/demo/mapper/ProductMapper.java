package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.ProductVO;

@Mapper
public interface ProductMapper {

    List<ProductVO> productList();

    ProductVO fetchProductByID(String id);

    void updateProduct(ProductVO product);

    void insertProduct(ProductVO product);

    void deleteProduct(String id);
}
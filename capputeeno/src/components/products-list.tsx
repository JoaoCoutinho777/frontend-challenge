"use client"
import { useProducts } from '@/hooks/useProducts'
import React from 'react'
import { ProductCard } from './product-card';
import styled from 'styled-components';

interface ProductsListProps {

}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;

  margin-top: 32px;
`

export function ProductsList() {
  const { data } = useProducts();
  console.log("aaaaaaa " + JSON.stringify(data));
  return (
    <ListContainer>
      {data?.map(product => <ProductCard 
        key={product.id}
        title={product.name}
        price={product.price_in_cents}
        image={product.image_url}/>
      )}
    </ListContainer>
  )
}

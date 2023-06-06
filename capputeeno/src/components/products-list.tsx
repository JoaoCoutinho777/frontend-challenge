"use client"
import { useProducts } from '@/hooks/useProducts'
import React from 'react'

interface ProductsListProps {

}

export function ProductsList(props: ProductsListProps) {
  const { data } = useProducts();
  console.log(data);
  return (
    <></>
  )
}

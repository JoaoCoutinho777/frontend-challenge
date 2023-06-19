import React from 'react'
import { Product } from './product'

export interface ProductsFetchResponse {
    data: {
        allProducts: Product[]
    }
}

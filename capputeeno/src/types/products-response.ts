import React from 'react'
import { Product } from './product'

export interface ProductsFetchResponse {
    data: {
        allProduts: Product[]
    }
}

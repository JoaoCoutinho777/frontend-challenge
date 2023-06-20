"use client"

import styles from './page.module.css'
import { FilterBar } from '@/components/filter/filter-bar'
import { ProductsList } from '@/components/products-list'
import { QueryClient } from '@tanstack/react-query'

export default function Home() {
  const client = new QueryClient();
  return (

    <main className={styles.main}>
      <FilterBar />
      <ProductsList />
    </main>

  )
}

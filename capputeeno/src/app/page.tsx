"use client"

import { DefaultPageLayout } from '@/components/default-page-layout'
import { FilterBar } from '@/components/filter/filter-bar'
import { Pagination } from '@/components/filter/pagination'
import { ProductsList } from '@/components/products-list'
import { QueryClient } from '@tanstack/react-query'
import styled from 'styled-components'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  `

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <Pagination/>
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  )
}

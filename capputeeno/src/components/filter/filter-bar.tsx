"use client"
import React from 'react'
import { FilterByType } from './filter-by-type'
import styled from 'styled-components';
import { FilterByPriority } from './filter-by-priority';

interface FilterBarProps {

}

const FilterConatiner = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
  `;

export function FilterBar(props: FilterBarProps) {
  return (
    <FilterConatiner>
        <FilterByType/>
        <FilterByPriority />
    </FilterConatiner>
  )
}

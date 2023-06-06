import React, { useState } from 'react'
import styled from 'styled-components';
import { ArrowIcon } from './arrow-icon';
import { useFilter } from '@/hooks/useFilter';
import { PriorityTypes } from '@/types/priority-types';

interface FilterByPriorityProps {

}

const FilterConainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        text-align: center;

        svg {
          margin-left: 16px;
        }
    }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  width: 250px;
  padding: 12px 16px;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  list-style: none;

  top: 100%;
  
  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;


export function FilterByPriority(props: FilterByPriorityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {setPriority} = useFilter();

  const handleOpen = () => setIsOpen(prev => !prev)

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }

  return (
    <FilterConainer>
        <button onClick={handleOpen}>Organizar por
            <ArrowIcon />
        </button>
        {isOpen && 
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: maior - menor</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.LOWEST_PRICE)}>Preço: menor - maior</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
        </PriorityFilter>}
    </FilterConainer>
  )
}

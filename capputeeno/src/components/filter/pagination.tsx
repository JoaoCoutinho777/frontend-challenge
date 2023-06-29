/* eslint-disable react/jsx-key */
"use client"

import styled from "styled-components"
import { PrevIcon } from "../icons/prev-icon"
import { NextIcon } from "../icons/next-icon"
import React, { useState } from "react";
import { useFilter } from "@/hooks/useFilter";

interface PaginationItemProps {
    selected: boolean;
}

const PaginationList = styled.ul`
    display: flex;
    position: relative;
    align-items: center;
    margin-left: auto;
    margin-top: 24px;
    gap: 2px;
    list-style: none;
    
    
`
const PaginationItem = styled.li<PaginationItemProps>`
    border-radius: 8px;
    font-weight: 400;
    font-size: 12px;
    padding: 9px 14px;
    line-height: 150%;

    text-align: center;
    text-transform: uppercase;
    
    color: ${props => props.selected ? 'var(--orange-low)' : 'var(--text-dark)'} ;
    background: var(--shapes-light-88-gray, #E9E9F0);

    border: ${props => props.selected ? '1px solid var(--orange-low)': ''};

}
`

const PageControllers = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    align-items: left;
    margin-left: 8px;
    gap: 4px;

    button {
        border-radius: 8px;
        border: none;
        background: var(--shapes-light-88-gray, #E9E9F0);
        cursor: pointer;
    }
`

export function Pagination() {
    
    const [currentPage, setCurrentPage] = useState(0);
    const {setPage} = useFilter();
    setPage(currentPage);


    const handlePrevPage = (page: number) => {
        if(page === 0) {
            setCurrentPage(4);
            setPage(4);
        } else {
            setCurrentPage((page) => page - 1 );
            setPage(page);
        } 
    }

    const handleNextPage = (page: number) => {
        if(page === 4) {
            setCurrentPage(0);
            setPage(0);
        } else {
            setCurrentPage((page) => page + 1 );
            setPage(page);
        } 
    }
    return (
        <PaginationList>
            <PaginationItem selected={currentPage === 0}>1</PaginationItem>
            <PaginationItem selected={currentPage === 1}>2</PaginationItem>
            <PaginationItem selected={currentPage === 2}>3</PaginationItem>
            <PaginationItem selected={currentPage === 3}>4</PaginationItem>
            <PaginationItem selected={currentPage === 4}>5</PaginationItem>
            <PageControllers>
                <button  onClick={() => handlePrevPage(currentPage)} >
                    <PrevIcon />
                </button>
                <button onClick={() => handleNextPage(currentPage)}>
                    <NextIcon />
                </button>
            </PageControllers>
        </PaginationList>
        
    ) 

}
"use client"

import styled from "styled-components";
import { BackIcon } from "./icons/back-icon";
import { useRouter } from "next/navigation";

interface BtnProps {
    navigate: string;
}

const Button = styled.button`
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    color: var(--secundary-text);
    background: transparent;
    border: none;
    cursor: pointer;`

    export function BackBtn({ navigate }: BtnProps){
        const router = useRouter();

        const handleNavigate = () => {
            router.push(navigate)
        }

        return (
            <Button onClick={handleNavigate}>
                <BackIcon />
                Voltar
            </Button>
        )
    }
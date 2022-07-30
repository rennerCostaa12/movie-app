import styled from "styled-components";

export const ContentSearchField = styled.form`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: #f1f1f1;

    @media(max-width: 920px){
        justify-content: center;
    } 

    @media(max-width: 375px){
        gap: 10px;
        flex-direction: column;
    }
`

export const SearchField = styled.input`
    width: 250px;
    height: 30px;
    font-size: 18px;
    background-color: #10141F;
    border: none;
    border-radius: 5px;
    margin-right: 1rem;
    color: #f1f1f1;
    padding: 0.4rem;
    outline: none;
    
    ::placeholder{
        color: #444853;
    }

    :focus{
        border: 2px solid #DC143C;
        transition: all ease 0.2s;
    }
`

export const ContentLabel = styled.div`
    color: #f1f1f1 !important;
`
import styled from "styled-components";

export const Container = styled.nav`
    z-index: 100;
    border-radius: 15px;
    position: fixed;
    margin: 1rem;
    padding: 1rem;
    width: 50px;
    height: 80%;
    background-color: #161D2F;
    color: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
    li{
        transform: scale(0.8);
        transition: all ease 0.3s;
    }

    li:hover{
        transform: scale(1);
        a{
            transition: all ease 0.3s;
            color: #DC143C;
        }
    }
    
    li a {
        text-decoration: none;
        color: #f1f1f1;
    }
`
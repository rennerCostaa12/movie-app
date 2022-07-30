import styled from "styled-components";

export const ContentModal = styled.div`
    font-size: 25px;
    text-align: center;
    color: #f1f1f1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 680px;
    background-color: #161d2fec;
    border: none;
    border-radius: 5px;
    box-shadow: 24px;
    padding: 1rem;

    @media(max-width: 768px){
        width: 90%;
        
        iframe{
            width: 100%;
        }
    }

    @media(max-width: 425px){
        font-size: 20px;
        
        iframe{
            height: 250px;
        }
    }
`
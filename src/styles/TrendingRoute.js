import styled from "styled-components"

export const ContainerTrending = styled.section`
    margin-left: 10rem;
    color: #f1f1f1;

    h1{
        font-size: 40px;
        margin: 1rem;
    }

    @media(max-width: 920px){
        margin-left: 0;
        > h1{
            text-align: center;
        }
    }
`

export const ContentTrending = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    @media(max-width: 920px){
        justify-content: center;
    }
`

export const ContentSliderMovies = styled.div`
    width: 95%;
    height: 450px;
    margin: 1rem;

    img{
        border-radius: 15px;
        width: 100%;
        height: 450px;
        filter: brightness(40%);
    }

    @media(max-width: 540px){
        width: 93%;
        height: 300px;

        img{
            height: 300px;
        }
    }
`

export const ContentDescriptionSlider = styled.div`
    position: absolute;
    left: 20px;
    bottom: 30px;

    h1{
        width: 50%;
        margin-left: 0;
    }

    p{
        width: 50%;
        line-height: 25px;
        font-weight: 300;
        font-style: italic;
    }

    @media(max-width: 540px){
        bottom: 0%;

        h1{
            font-size: 18px;
            margin: 0;
        }

        p{
            font-size: 13px;
            width: 70%;
            line-height: 18px;
        }
    }
`

export const CardMovie = styled.div`
    width: 250px;
    cursor: pointer;
    transform: scale(0.95);
    transition: all ease 0.3s;
    
    &:hover{
        transform: scale(1);
    }
    
    a{
        color: #DC143C;
        text-decoration: none;
    }

    img{
        border-radius: 15px;
        width: 100%;
        height: 250px;
    }

    div{
        color: #808080;
        margin-right: 0.7rem;
        display: flex;
        align-items: center;
        gap: 0px;
        font-size: 15px;
    }

    h3{
        margin: 1rem 0;
    }
      
    button{  
        z-index: 100;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        background: none;
        border: none;
    }
`
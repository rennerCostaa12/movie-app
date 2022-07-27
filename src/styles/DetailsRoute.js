import styled from "styled-components";

export const ContainerDatas = styled.section`
    margin-left: 6rem;
`

export const ContentBannerMovie = styled.div`
    z-index: 0;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 90vh;
    filter: brightness(40%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const ContentDatas = styled.div`
    display: flex;
`

export const PosterContent = styled.div`
    img{
        width: 300px;
        height: 100%;
    }
`

export const DescriptionDetails = styled.div`
    padding: 1.5rem;
    color: #f1f1f1;
    background-color: #00000086;

    h1{
        font-size: 35px;
        color: #DC143C;
        margin: 0.5rem 0;
    }

    h2{
        margin: 0.5rem 0;
    }

    h4{
        font-size: 20px;
        margin: 0.5rem 0;
    }

    p{
        font-style: italic;
        font-weight: 300;
        font-size: 17px;
        line-height: 30px;
    }

    button{
        background-color: #F7C008;
        font-size: 19px;
        font-weight: bold;
        padding: 0.8rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transform: scale(0.9);
        transition: all ease 0.3s;
        display: flex;
        align-items: center;
        color: #000;
    }

    button:hover{
        background-color: #F7C008;
        transform: scale(1);
    }
`

export const ContentGenres = styled.div`
    display: flex;
    gap: 20px;
    span{
        background-color: #DC143C;
        padding: 0.7rem;
        border-radius: 5px;
        font-weight: bold;
       }

`

export const ContentButtonsDescriptions = styled.div`
    display: flex;
    gap: 20px;
`

export const VoteContent = styled.div`
    float: right;
    border-radius: 360px;
    padding: 0.8rem;
    font-size: 22px;
    div{
        font-size: 20px;
        font-weight: bold;
        color: #f1f1f1 ;
    }
`

export const ContentDetailsMovie = styled.section`
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 80px;
    background-color: #161D2F;
    color: #f1f1f1;
    div{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 20px;
        font-weight: bold;
    }
`

export const ContainerImagesAndCasts = styled.section`
    background-color: #00000086;
    padding-bottom: 1rem;
    h1{
        text-align: center;
        font-size: 40px;
        color: #f1f1f1;
    }
`

export const ContentActors = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   flex-wrap: wrap;
`

export const CardActor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f1f1f1;   
    
    img{
        width: 200px;
    }
`

export const NameActor = styled.h3`
    font-size: 20px;
    margin: 0.5rem;
`

export const ContentSliderBackDrops = styled.section`
    margin: 0rem 0;
    width: 100%;

    h1{
        padding-top: 2rem;
        margin: 1rem;
    }

    img{
        width: 100%;
        height: 60vh;
    }
`

export const ContentMoviesSimilars = styled.section`
    padding: 0 2rem;

    a{
        text-decoration: none !important;
        color: #f1f1f1;
    }

    div div div div{    
        a h3{
            margin: 0;
            font-size: 25px;
        }

        :hover{
            a h3{
                text-decoration: none;
                color: #DC143C;
            }
        }

        img{
            width: 240px;
            transition: all ease 0.3s;
            :hover{
                cursor: pointer;
                filter: brightness(30%);    
            }
        }
      
    }

`

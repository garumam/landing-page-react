import styled from 'styled-components'
import textureBg from '../assets/home-texture.png'

export const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || "row"};
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 100px;
`

export const Row = styled.div`
    max-width:${props => props.maxWidth || "100%"};
`
export const RowResponsive = styled(Row)`
    padding: 10px;
    @media (min-width: 576px) {
        width: ${props => props.smallWidth};
    }
    @media (min-width: 991px) {
        width: ${props => props.mediumWidth};
    }
    @media (min-width: 1220px) {
        width: ${props => props.largeWidth};
    }
`

export const LinkStyled = styled.a`
    color: inherit;
    margin-right: 20px;
    font-weight: 400;
    transition: 0.15s ease-in-out 0s;
    cursor: pointer;
    :hover {
        color: #0069ff;
    }
`

export const Background = styled.div`
    background-image: url(${textureBg}), linear-gradient(35deg, rgb(0, 255, 255) 0%, rgb(0, 105, 255) 100%);
    background-size: cover;
    padding: 150px 0px 50px;
    ${props => props.topZero && "top: 0;"}
    display: block;
    position: absolute;
    width: 100%;
    height: ${props => props.height || "900px"};
    z-index: -1;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 81%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 81%, 0 100%);
`
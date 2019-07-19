import styled from "styled-components";
import textureBg from '../assets/home-texture.png';

export const Background = styled.div`
height: 600px;
background: url(${textureBg}), linear-gradient(90deg, rgba(0,212,255,1) 0%, rgb(24, 144, 255) 100%);
-webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
position: absolute;
width: 100%;

@media (min-width: 768px) {
    height: 700px;
}

@media (min-width: 991px) {
    height: 900px;
}
`;

export const Section = styled.section`
    ${props => props.padTop && `padding-top: ${props.padTop};`}
    ${props => props.padBot && `padding-bottom: ${props.padBot};`}
`;

export const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    width: 45px;
    height: 45px; 
    position: absolute;
    background: white;
    top: -5px;
    left: -5px;
    border-radius: 50%;
    box-shadow: rgba(42, 96, 151, 0.25) 0px 6px 10.34px 0.66px;
    text-align: center;
`;
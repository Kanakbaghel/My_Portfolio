import styled, { keyframes } from "styled-components";

export const FlexCont = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MB2 = styled.div`
  margin-bottom: 2rem;
`;

export const AboutContainer = styled.div`
  padding-top: 3rem;
`;

export const Image = styled.img`
  border-radius: 50%;
  padding: 3rem;
`;

export const Summary = styled.div`
  padding: 1rem;
  font-size: 1.15rem;
  font-weight: 300;
`;

export const slideAnimation = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

export const CoolButton = styled.a`
  text-align: center;
  margin: 2rem auto;
  width: fit-content;
  font-weight: 500;
  border: 2px solid #03e9f4;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  color: #03e9f4;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;

  &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  &:nth-child(1) {
    filter: hue-rotate(0deg);
  }

  &:nth-child(2) {
    filter: hue-rotate(110deg);
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: ${slideAnimation} 1s linear infinite;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: ${slideAnimation} 1s linear infinite;
    animation-delay: 0.25s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: ${slideAnimation} 1s linear infinite;
    animation-delay: 0.5s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: ${slideAnimation} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;

export const Emb = styled.span`
  font-weight: 600;
  color: #03e9f4;
`;

export const Emb2 = styled.span`
  font-weight: 420;
  color: #dedede;
`;

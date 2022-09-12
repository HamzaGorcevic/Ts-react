import styled, { createGlobalStyle } from "styled-components";

interface Props{
    el:number
}

export const Global = styled.div`
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 99vh;
    width: 99vw;
    
    `;

export const ContainerStatistic = styled.div`
  width: 50%;
  height: 600px;
  background-color: greenyellow;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const DashSingleStyle = styled.div<Props>`
    height: ${props =>(`${props.el + 100}px`)};
    background-color: red;
    width: 100px;
    border-radius:10px 10px 0px 0px

    `
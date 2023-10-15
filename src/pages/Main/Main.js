import React from 'react';
import styled from 'styled-components';
import Swiper from '../../components/Swiper/Swiper';
import Tab from '../../components/Tab/Tab';

function Main(props) {
  return (
    <MainStyle>
      <Swiper />
      <Tab />
    </MainStyle>
  );
}

export default Main;

const MainStyle = styled.div`
  width: 390px;
  height: 844px;
  background-color: #e6e6e6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
`;

import React from 'react'
import styled from 'styled-components'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
const Container =styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
 position: absolute;
 top:0;
 bottom: 0;
left: ${props=>props.direction==='left' && '10px'};
right: ${props=>props.direction==='right' && '10px' };
margin:auto;
`;

export const Slider = () => {
  return (
    <Container>
        <Arrow direction='left'>
            <ArrowCircleLeftOutlinedIcon/>
        </Arrow>
        <Arrow direction='right'>
            <ArrowCircleRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

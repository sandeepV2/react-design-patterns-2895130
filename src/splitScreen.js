import React from 'react';
import styled from 'styled-components';
//Using styled compoents for layout.
const Container = styled.div`
    display: flex;
`
 /* These values represent 
    flex-grow, flex-shrink, and flex-basis, respectively.*/
const Pane = styled.div`
    flex: ${props => props.weight}

`
export const SplitScreen = ({
    left: Left,
    right: Right,
    leftWeight = 1,
    rightWeight = 1
}) => {
  return (
    <Container>
        <Pane weight={leftWeight}>
            <Left/>
        </Pane>
        <Pane weight={rightWeight}>
            <Right/>
        </Pane>
    </Container>
  )
}


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
    children, 
    leftWeight = 1,
    rightWeight = 1
}) => {
    // note children will be in the form of array.
    const [left, right] = children;
  return (
    <Container>
        <Pane weight={leftWeight}>
            {left}
        </Pane>
        <Pane weight={rightWeight}>
            {right}
        </Pane>
    </Container>
  )
}


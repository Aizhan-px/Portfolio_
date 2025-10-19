import styled from "styled-components";

type FlexContainerPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}

export const FlexContainer= styled.div<FlexContainerPropsType>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'flex'};
    justify-content: ${(props) => props.justify || 'flex-start'};
    align-items: ${(props) => props.align || 'stretch'};
    flex-wrap: ${(props) => props.wrap || 'nowrap'};
    height: ${(props) => props.wrap || '100%'};
    gap: ${(props) => props.gap};
`


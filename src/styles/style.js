import styled from 'styled-components'

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
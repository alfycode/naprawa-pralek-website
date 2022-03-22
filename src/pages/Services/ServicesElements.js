import styled from 'styled-components'

export const ServicesRow = styled.section`
background-color: ${props => props.second ? "cadetblue" : "gray"};
width: 100%;
height: fit-content;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: 6em;
padding: 6em 0;
flex-wrap: nowrap;
@media screen and (min-width: 960px) {
    flex-direction: row;
    height: 50vh;
    padding: 0 3em;
    gap: 3em;
}
`
export const ServiceItem = styled.div`
width: calc(100% - 12em);
aspect-ratio: 1 / 1;
background-color: brown;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`
export const ServiceTitle = styled.h2``
export const ServiceText = styled.p``
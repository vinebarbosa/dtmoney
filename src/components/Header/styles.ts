import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  button {
    font-size: 1rem;
    border: 0;
    color: #FFF;
    background: var(--blue-light);
    padding: 0 2rem;
    height: 3rem;
    border-radius: 0.25rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }
`
import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
  h1 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    padding: 0 1.5rem;

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background: var(--green);
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    color: #FFF;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }
`;

export const TrasactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: transparent;

    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    transition: border-color 0.2s;
    
    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      height: 20px;
      width: 20px;
      margin-right: 1rem;
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      color: var(--text-title);
    }
  }
`


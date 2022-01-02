import styled from 'styled-components'

export const H1Title = styled.h1`
  text-align: center;
  color: #6b6b6b;
  font-weight: 900;
  margin-top: 4rem;
`
export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  input {
    border: 1px solid #cccc;
    border-radius: 1rem;
    width: 30rem;
    padding: 1rem 0.5rem;

    &:focus {
      outline: none;
    }
  }
`

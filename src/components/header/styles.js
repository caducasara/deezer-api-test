import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #fff;
  color: #0d0d0d;
  height: 5rem;
  padding: 0 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  -webkit-box-shadow: 5px 5px 13px -10px #000000;
  box-shadow: 5px 5px 13px -10px #000000;
`
export const HeaderImage = styled.div`
  width: 9rem;

  img {
    width: 100%;
    cursor: pointer;
  }
`
export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  a {
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;

    transition: color 0.2s;

    &:hover {
      color: #d8d8d8d8;
    }
  }
`

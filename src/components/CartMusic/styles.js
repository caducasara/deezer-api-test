import styled from 'styled-components'

export const Cart = styled.div`
  min-width: 15rem;
  height: 22rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  border-radius: 1rem;
  background-color: #fff;

  -webkit-box-shadow: 5px 5px 13px -10px #000000;
  box-shadow: 5px 5px 13px -10px #000000;

  audio {
    width: 80%;
    height: 2.5rem;
  }
`
export const InfoCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  img {
    border-radius: 1rem;
  }

  p {
    color: #0d0d0d;
    font-size: 1rem;
    margin-top: 0.5rem;
    text-align: center;
  }
`

export const NavCart = styled.div`
  color: #0d0d0d;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: 1px solid #ccc;
    padding: 0.25rem 2rem;
    border-radius: 0.25rem;

    transition: color 0.2s;

    &:hover {
      color: #cccc;
    }
  }
`

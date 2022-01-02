import {HeaderContainer, HeaderImage, HeaderNav} from './styles'
import Link from 'next/link'

export default function Header(){

  return (
      <HeaderContainer>
        <Link href="/">
          <HeaderImage>
              <img src="images/logo.png" alt="Deezer" />
          </HeaderImage>
        </Link>
        <HeaderNav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/favoritos">
            <a>Favoritos</a>
          </Link>
        </HeaderNav>
      </HeaderContainer>
  )
}
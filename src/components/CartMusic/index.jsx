import {Cart, NavCart, InfoCart } from './styles'
import { useRouter } from 'next/router';
import Link from 'next/link'

import { BsFillFileEarmarkPlayFill, BsFillStarFill, BsFillTrashFill } from "react-icons/bs";


import {connect} from 'react-redux'

function CartMusic({music, dispatch}){

  const { asPath } = useRouter();

  function addToFavorites(data){
    return {
      type: 'ADD_FAVORITES',
      data
    }
  }

  function deleteToFavorites(data){
    return {
      type: 'DELETE_FAVORITES',
      data
    }
  }

  return (
    <Cart>
      <InfoCart>
        <img src={music.cover} alt={music.title} />
        <div>
          <p>{music.title}</p>
          <p>{music.artist}</p>
          <p>Duração: {music.duration}min</p>
        </div>
      </InfoCart>
      
      <audio src={music.preview} controls="controls"/>
        
      <NavCart>
        {asPath === '/' &&
          <button alt="Adicionar aos favoritos"
          onClick={()=>dispatch(addToFavorites(music))}
          >
            <BsFillStarFill/>
          </button>
        }
        <Link href={music.link}>
          <button alt="Ir para pagina do deezer"><BsFillFileEarmarkPlayFill/></button>
        </Link>
        {asPath === '/favoritos' && 
          <button alt="Excluir"
            onClick={()=>dispatch(deleteToFavorites(music))}
          >
          <BsFillTrashFill/>
          </button>}
      </NavCart>
    </Cart>
  )
}

export default connect(state => ({}))(CartMusic)
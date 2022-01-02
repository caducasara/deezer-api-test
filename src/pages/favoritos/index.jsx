import {Main, ContainerMusic} from '../../styles/common-styles'
import Head from 'next/head'

import {connect} from 'react-redux'

import {WarningH1} from './styles'

import Cart from '../../components/CartMusic'

function Favoritos({music}){

  return (
    <>
    <Head>
      <title>Favoritos</title>
    </Head>
    {music.length < 1 && <WarningH1>Sem músicas adicionadas! 😢</WarningH1>}
    <Main>
      <ContainerMusic>
        {music && music.map(fav => (
          <Cart key={music.id} music={fav}/>
        ))}
      </ContainerMusic>
    </Main>
    </>
  )
}

export default connect(state => ({music: state}))(Favoritos)
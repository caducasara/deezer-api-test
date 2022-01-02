import { useState } from 'react'
import { Main, ContainerMusic} from '../styles/common-styles'
import {H1Title, SearchInput} from './home'
import CartMusic from '../components/CartMusic'

import Head from 'next/head'

import {api} from '../services/api'

export default function Home({musicList}) {

  const musicFormated = musicList.map(music => {
    return {
      ...music,
      duration: Math.round((music.duration / 60).toFixed(2))
    }
  })

  const [musics, setMusics] = useState(musicFormated);
  const [search, setSearch] = useState('');


  const musicFiltered = musics.filter((music) => 
    music.artist.toLowerCase().includes(search.toLowerCase()) ||
    music.title.toLowerCase().includes(search.toLowerCase()) ||
    music.album.toLowerCase().includes(search)
  )


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <H1Title>Músicas do momento 🎶</H1Title>
      <SearchInput>
        <input type="text"
          placeholder="Pesquise sua Musica favorita"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchInput>
      <Main>
        <ContainerMusic>
         {musicFiltered.map(music => (
           <CartMusic key={music.id} music={music}/>
         ))}
        </ContainerMusic>
      </Main>
    </>
  )
}

export const getStaticProps = async () => {

  const response = await api.get('/playlist/3155776842').then(response => response.data.tracks.data);

  const musicList = response.map(music => {
    return {
      id: music.id,
      cover: music.album.cover,
      title: music.title,
      artist: music.artist.name,
      album: music.album.title,
      duration: music.duration,
      link: music.link,
      preview: music.preview,
    }
  })

  return {
    props: {
      musicList
    }
  }
}
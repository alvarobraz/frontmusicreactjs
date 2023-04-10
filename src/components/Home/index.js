import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Dashboard'
import Header from '../Header'
import { BoxMusic } from "./BoxMusic";
import ImgVegas from '../../assets/images/musics/vegas.webp'
import api from '../../services/api'
import { ContainerHome, Content, HeaderCategory, Title, ButtonCategory } from "./styles";
import carregando from '../../assets/images/Loading_icon.gif'


export default function Home() {

  useEffect(() => {
    getMusics()
    getCategory()
  }, []);

  const [ loadMusic, setLoadMusic ] = useState(false);
  const [ music, setMusic ] = useState([]);

  const [ loadcategory, setLoadcategory ] = useState(false);
  const [ category, setCategory ] = useState([]);

  const [ nameFilter, setNameFilter ] = useState('');

  const [ page, setPage ] = useState(0);

  const [ sortBy, setSortBy ] = useState('name');

  async function loadMusicFilter(page, nameFilter, sortBy) {

    setLoadMusic(true)
    await api.get(`/musicas?name=${nameFilter}&status=active&sortBy=${sortBy}&page=${page}&limit=10`)
    .then(response => {
      setLoadMusic(false)
      setMusic(response?.data?.musicsSearch);
    }).catch(error => {setLoadMusic(false)});
}

  async function loadfilterMusic(event) {
    event.preventDefault();
    setLoadMusic(true);
    const name = event.target.value;
    setNameFilter(event.target.value);
    const pageNumber = 0;
    setPage(pageNumber);

    loadMusicFilter(pageNumber, name, sortBy)

}

  async function getMusics() {
    setLoadMusic(true)
    await api.get('/musicas/')
    .then(response => {
      console.log(response?.data?.musicsSearch)
      setLoadMusic(false)
      setMusic(response?.data?.musicsSearch);
    }).catch(error => {
      setLoadMusic(false)
    })
  }

  async function getCategory() {
    setLoadcategory(true)
    await api.get('/categorias/')
    .then(response => {
      console.log(response?.data?.musicCategorysSearch)
      setLoadcategory(false)
      setCategory(response?.data?.musicCategorysSearch);
    }).catch(error => {
      setLoadcategory(false)
    })
  }

  async function getMusicsCategory(e) {
      console.log(e)
      setLoadMusic(true)
      await api.get(`/musicas/?category=${e}&page=0&limit=10&status=active`)
      .then(response => {
        console.log(response?.data?.musicsSearch)
        setLoadMusic(false)
        setMusic(response?.data?.musicsSearch);
      }).catch(error => {
        setLoadMusic(false)
      })
  }

  return (
      <>
      <Layout>
        <Header
          nameFilter={nameFilter}
          onUserInputChange={(event) => loadfilterMusic(event)}
        />
        <ContainerHome>
          <HeaderCategory>
            <Title>CATEGORIAS</Title>
            <ButtonCategory onClick={()=>getMusics()}>Todas</ButtonCategory>
            {
              category.map((cat, i) => (
                <ButtonCategory onClick={()=>getMusicsCategory(cat?._id)} key={i}>{cat?.name}</ButtonCategory>
              ))
            }
          </HeaderCategory>
          <Content>
            {
              loadMusic ?
              <div className='carregamento'><img src={carregando} alt="Carregando"/></div>
              :
              music.map((play, index) => (
                <BoxMusic
                key={index}
                image={ImgVegas}
                title={play?.title}
                author={play?.author}
                keyWords={play?.keyWords.map((k, i)=>(
                  play?.keyWords?.length-1 === i ?
                  k :
                  k+', '
                ))}
                />
              ))
            }
          </Content>
        </ContainerHome>
      </Layout>
      </>
  )
}
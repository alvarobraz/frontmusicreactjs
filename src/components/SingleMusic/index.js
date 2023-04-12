import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Dashboard'
import Header from '../Header'
import api from '../../services/api'
import { ContainerHome, Content, HeaderCategory, Title } from "./styles";


export default function Home(props) {

  const { id } = props.match.params

  useEffect(() => {
    getMusicsID(id)
  }, [id]);

  console.log(props.match.params)

  const [ loadMusicID, setLoadMusicID ] = useState(false);
  const [ musicID, setMusicID ] = useState([]);
  const [ nameFilter, setNameFilter ] = useState('');

  
  async function getMusicsID(id) {
    setLoadMusicID(true)
    await api.get(`/musicas/${id}`)
    .then(response => {
      console.log(response?.data)
      setLoadMusicID(false)
      setMusicID(response?.data);
    }).catch(error => {
      setLoadMusicID(false)
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
        {loadMusicID ? 
        'Carregando...' 
        :
        <>
        <HeaderCategory>
          <Title>{musicID?.title}<span>{musicID?.author}</span></Title>
        </HeaderCategory>
        <Content>
          <div className='elemento-60'>
            <p>{musicID?.descrition ? musicID?.descrition.split('\n').map(str => (<><br/>{str}</>)) : ''}</p>
          </div>
          <div className='elemento-40'>
          <iframe src={musicID?.url} title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>              
          </div>
        </Content>
        </>
        }
        
      </ContainerHome>
    </Layout>
    </>
  )
}
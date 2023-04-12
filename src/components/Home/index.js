import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Dashboard'
import Header from '../Header'
import { BoxMusic } from "./BoxMusic";
import ImgVegas from '../../assets/images/musics/vegas.webp'
import api from '../../services/api'
import { ContainerHome, Content, ContentAdd, HeaderCategory, Title, ButtonCategory, FormModal, Boxcategory } from "./styles";
import carregando from '../../assets/images/Loading_icon.gif'
import icon_mais from '../../assets/images/icon_mais.svg'
import Modal from 'react-modal'

export default function Home() {

  useEffect(() => {
    getMusics()
    getCategories()
  }, []);

  const [ loadMusic, setLoadMusic ] = useState(false);
  const [ musics, setMusics ] = useState([]);

  const [ loadcategory, setLoadcategories ] = useState(false);
  const [ categories, setCategories ] = useState([]);

  const [ category, setCategory ] = useState([]);
  
  const [ loadName, setLoadName ] = useState(false);

  const [ loadcategoriesModal, setLoadcategoriesModal ] = useState(false);
  const [ categoriesModal, setCategoriesModal ] = useState([]);

  const [ nameFilter, setNameFilter ] = useState('');

  const [ page, setPage ] = useState(0);

  const [ sortBy, setSortBy ] = useState('name');

  async function loadMusicFilter(page, nameFilter, sortBy) {

    setLoadMusic(true)
    await api.get(`/musicas?name=${nameFilter}&status=active&sortBy=${sortBy}&page=${page}&limit=10`)
    .then(response => {
      setLoadMusic(false)
      setMusics(response?.data?.musicsSearch);
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
      // console.log(response?.data?.musicsSearch)
      setLoadMusic(false)
      setMusics(response?.data?.musicsSearch);
    }).catch(error => {
      setLoadMusic(false)
    })
  }

  async function getCategories() {
    setLoadcategories(true)
    await api.get('/categorias/?status=active')
    .then(response => {
      // console.log(response?.data?.musicCategorysSearch)
      setLoadcategories(false)
      setCategories(response?.data?.musicCategorysSearch);
    }).catch(error => {
      setLoadcategories(false)
    })
  }

  async function getMusicsCategory(e) {
      // console.log(e)
      setLoadMusic(true)
      await api.get(`/musicas/?category=${e}&page=0&limit=10&status=active`)
      .then(response => {
        // console.log(response?.data?.musicsSearch)
        setLoadMusic(false)
        setMusics(response?.data?.musicsSearch);
      }).catch(error => {
        setLoadMusic(false)
      })
  }

  async function getCategoriesModal() {
    setLoadcategoriesModal(true)
    await api.get('/categorias/?sortBy=name')
    .then(response => {
      console.log(response?.data?.musicCategorysSearch)
      setLoadcategoriesModal(false)
      setCategoriesModal(response?.data?.musicCategorysSearch);
    }).catch(error => {
      setLoadcategoriesModal(false)
    })
  }

  async function myChangeHandlerToCategory(event) {
 
    let nam      = event.target.name;
    let val      = event.target.value;

    if(nam === 'name') {
      if(val.length !== 0) {
        setLoadName(false)
        setCategory({ ...category, [nam]: val })
      }
      else {
        setLoadName(true)
        setCategory({ ...category, [nam]: val })
      }
    }

  }

  async function registerCategory() {
    if(
      category?.name === '' || category?.name === undefined 
    ) {  
      if(category?.name === '' || category?.name === undefined) {
        setLoadName(true)
      }
     return
    }
    setLoadcategoriesModal(true);
    await api.post('categorias', category)
    .then(response => {
      setCategory({})
      setLoadcategoriesModal(false);
      getCategoriesModal()
      getCategories()
      // setCategoriesModalOpen(false)
      // swal({ icon: "success", title: "Sucesso!", text: "cadastro efetuado com sucesso!" });
    }).catch(error => {
      setLoadcategoriesModal(false);
    });

  }

  async function active(_id) {
    
    setLoadcategoriesModal(true);
    await api.put(`categorias/${_id}`, {status: 'active'})
    .then(response => {
      setCategory({})
      setLoadcategoriesModal(false);
      getCategoriesModal()
      getCategories()
      // setCategoriesModalOpen(false)
      // swal({ icon: "success", title: "Sucesso!", text: "cadastro efetuado com sucesso!" });
    }).catch(error => {
      setLoadcategoriesModal(false);
    });
    
  }

  async function inactive(_id) {
    
    setLoadcategoriesModal(true);
    await api.delete(`categorias/${_id}`)
    .then(response => {
      setCategory({})
      setLoadcategoriesModal(false);
      getCategoriesModal()
      getCategories()
      // setCategoriesModalOpen(false)
      // swal({ icon: "success", title: "Sucesso!", text: "cadastro efetuado com sucesso!" });
    }).catch(error => {
      setLoadcategoriesModal(false);
    });
    
  }

  const [ categoryModalOpen, setCategoriesModalOpen ] = useState(false)

  function handleOPenCategoryModalOpen() {
    setCategoriesModalOpen(true)
    getCategoriesModal()
  }

  function handleCloseCategoryModalOpen() {
    setCategoriesModalOpen(false)
  }

  const [ musicModalOpen, setMusicsModalOpen ] = useState(false)

  function handleOPenMusicModalOpen() {
    setMusicsModalOpen(true)
    // getCategoriesModal()
  }

  function handleCloseMusicModalOpen() {
    setMusicsModalOpen(false)
  }

  const [ music, setMusic ] = useState([]);
  const [ loadMusicReg, setLoadMusicReg ] = useState(false);
  const [ loadTitle, setLoadTitle ] = useState(false);
  const [ loadAuthor, setLoadAuthor ] = useState(false);
  const [ loadURL, setLoadURL ] = useState(false);
  const [ loadDescription, setLoadDescription ] = useState(false);
  const [ loadImg, setLoadImg ] = useState(false);
  const [ loadKeywords, setLoadKeywords ] = useState(false);
  const [ loadReleaseDateOf, setReleaseDateOf ] = useState(false);

  async function myChangeHandlerToMusic(event) {
 
    let nam      = event.target.name;
    let val      = event.target.value;

    if(nam === 'title') {
      if(val.length !== 0) {
        setLoadTitle(false)
        setMusic({ ...music, [nam]: val })
      }
      else {
        setLoadTitle(true)
        setMusic({ ...music, [nam]: val })
      }
    }
    if(nam === 'author') {
      if(val.length !== 0) {
        setLoadAuthor(false)
        setMusic({ ...music, [nam]: val })
      }
      else {
        setLoadAuthor(true)
        setMusic({ ...music, [nam]: val })
      }
    }
    if(nam === 'url') {
      if(val.length !== 0) {
        setLoadURL(false)
        setMusic({ ...music, [nam]: val })
      }
      else {
        setLoadURL(true)
        setMusic({ ...music, [nam]: val })
      }
    }
    if(nam === 'descrition') {
      if(val.length !== 0) {
        setLoadDescription(false)
        setMusic({ ...music, [nam]: val })
      }
      else {
        setLoadDescription(true)
        setMusic({ ...music, [nam]: val })
      }
    }
    if(nam === 'img') {
      if(val.length !== 0) {
        setLoadImg(false)
        setMusic({ ...music, [nam]: val })
      }
      else {
        setLoadImg(true)
        setMusic({ ...music, [nam]: val })
      }
    }
    if(nam === 'keyWords') {
      if(val.length !== 0) {
        setLoadKeywords(false)
        setMusic({ ...music, [nam]: val })
      }
      else {
        setLoadKeywords(true)
        setMusic({ ...music, [nam]: val })
      }
    }
    if(nam === 'releaseDateOf') {
      if(val.length !== 0) {
        setReleaseDateOf(false)
        setMusic({ ...music, [nam]: val })
      }
      else {
        setReleaseDateOf(true)
        setMusic({ ...music, [nam]: val })
      }
    }
    

  }

  async function registerMusic() {
    if(
      music?.title === '' || music?.title === undefined || 
      music?.author === '' || music?.author === undefined ||
      music?.url === '' || music?.url === undefined ||
      music?.descrition === '' || music?.descrition === undefined ||
      music?.img === '' || music?.img === undefined ||
      music?.keyWords === '' || music?.keyWords === undefined 
    ) {  
      if(music?.title === '' || music?.title === undefined) {
        setLoadTitle(true)
      }
      if(music?.author === '' || music?.author === undefined) {
        setLoadAuthor(true)
      }
      if(music?.url === '' || music?.url === undefined) {
        setLoadURL(true)
      }
      if(music?.descrition === '' || music?.descrition === undefined) {
        setLoadDescription(true)
      }
      if(music?.img === '' || music?.img === undefined) {
        setLoadImg(true)
      }
      if(music?.keyWords === '' || music?.keyWords === undefined) {
        setLoadKeywords(true)
      }
     return
    }
    setLoadMusicReg(true);
    await api.post('musicas', music)
    .then(response => {
      setMusic({})
      setLoadMusicReg(false);
      getMusics()
      // setCategoriesModalOpen(false)
      // swal({ icon: "success", title: "Sucesso!", text: "cadastro efetuado com sucesso!" });
    }).catch(error => {
      setLoadMusicReg(false);
    });

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
            {
              loadcategory ?
              <img src={carregando} alt="Carregando"/> :
              <>
              <ButtonCategory onClick={()=>getMusics()}>Todas</ButtonCategory>
              {
                categories?.map((cat, i) => (
                  <ButtonCategory onClick={()=>getMusicsCategory(cat?._id)} key={i}>{cat?.name}</ButtonCategory>
                ))
              }
              <img onClick={handleOPenCategoryModalOpen} src={icon_mais} alt=""/>
              </>
            }
            
          </HeaderCategory>
          <Content>
            {
              loadMusic ?
              <div className='carregamento'><img src={carregando} alt="Carregando"/></div>
              :
              musics.map((play, index) => (
                <BoxMusic
                key={index}
                id={play?._id}
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
            
            <Modal 
            isOpen={categoryModalOpen} 
            onRequestClose={handleCloseCategoryModalOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
              
              <FormModal>
              <h1>Categorias</h1>
                <input
                type="text"
                placeholder='Nome'
                name='name'
                value={category?.name ? category?.name : ''}
                onChange={myChangeHandlerToCategory}
                className={loadName ? "error_input" : ''}
                 />
                <button onClick={()=>registerCategory()}>
                  {loadcategoriesModal ?
                  <img src={carregando} alt="Carregando"/>
                  : 
                  'Cadastrar'}
                </button>
              </FormModal>
              <Boxcategory>
                {
                  loadcategoriesModal ?
                  <img src={carregando} alt="Carregando"/>
                  :
                  categoriesModal?.map((catModal, index) => (
                    <>
                    <div key={index}>
                      <p>{catModal?.name}</p>
                      <button 
                      onClick={catModal?.status === 'active' ? ()=>inactive(catModal?._id) : ()=>active(catModal?._id)}
                      className={catModal?.status === 'active' ? 'red' : 'green'}
                      >
                      {catModal?.status === 'active' ? 'desativar' : 'Ativar'}
                      </button>
                    </div>
                    </>
                  ))
                }
                
                {/* <div>
                  <p>asas</p>
                  <button className="red">
                    desativar
                  </button>
                </div>
                <div>
                  <p>asas</p>
                  <button className="yellow">
                    editar
                  </button>
                </div> */}
              </Boxcategory>
            </Modal>
            
            <Modal 
            isOpen={musicModalOpen} 
            onRequestClose={handleCloseMusicModalOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
              
              <FormModal>
              <h1>Músicas</h1>
                <input
                type="text"
                placeholder='Nome da Música'
                name='title'
                value={music?.title ? music?.title : ''}
                onChange={myChangeHandlerToMusic}
                className={loadTitle ? "error_input" : ''}
                 />
                 <input
                type="text"
                placeholder='Autoria'
                name='author'
                value={music?.author ? music?.author : ''}
                onChange={myChangeHandlerToMusic}
                className={loadAuthor ? "error_input" : ''}
                 />
                 <input
                type="text"
                placeholder='URL'
                name='url'
                value={music?.url ? music?.url : ''}
                onChange={myChangeHandlerToMusic}
                className={loadURL ? "error_input" : ''}
                 />
                 <textarea
                type="text-area"
                placeholder='Letra'
                name='descrition'
                value={music?.descrition ? music?.descrition : ''}
                onChange={myChangeHandlerToMusic}
                className={loadDescription ? "error_input" : ''}
                 />
                 <input
                type="text"
                placeholder='URL da imagem'
                name='img'
                value={music?.img ? music?.img : ''}
                onChange={myChangeHandlerToMusic}
                className={loadImg ? "error_input" : ''}
                 />
                 <input
                type="text"
                placeholder='palavras chaves'
                name='keyWords'
                value={music?.keyWords ? music?.keyWords : ''}
                onChange={myChangeHandlerToMusic}
                className={loadKeywords ? "error_input" : ''}
                 />
                 <input
                type="text"
                placeholder='Data de lançamento'
                name='releaseDateOf'
                value={music?.releaseDateOf ? music?.releaseDateOf : ''}
                onChange={myChangeHandlerToMusic}
                className={loadReleaseDateOf ? "error_input" : ''}
                 />
                <button onClick={()=>registerMusic()}>
                  {loadcategoriesModal ?
                  <img src={carregando} alt="Carregando"/>
                  : 
                  'Cadastrar'}
                </button>
              </FormModal>
              <Boxcategory>
                {
                  loadcategoriesModal ?
                  <img src={carregando} alt="Carregando"/>
                  :
                  categoriesModal?.map((catModal, index) => (
                    <>
                    <div key={index}>
                      <p>{catModal?.name}</p>
                      <button 
                      onClick={catModal?.status === 'active' ? ()=>inactive(catModal?._id) : ()=>active(catModal?._id)}
                      className={catModal?.status === 'active' ? 'red' : 'green'}
                      >
                      {catModal?.status === 'active' ? 'desativar' : 'Ativar'}
                      </button>
                    </div>
                    </>
                  ))
                }
                
                {/* <div>
                  <p>asas</p>
                  <button className="red">
                    desativar
                  </button>
                </div>
                <div>
                  <p>asas</p>
                  <button className="yellow">
                    editar
                  </button>
                </div> */}
              </Boxcategory>
            </Modal>
          </Content>

          <ContentAdd>
            <img onClick={()=>handleOPenMusicModalOpen()} src={icon_mais} alt=""/>
          </ContentAdd>
        </ContainerHome>
      </Layout>
      </>
  )
}
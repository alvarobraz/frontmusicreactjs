import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Dashboard'
import Header from '../Header'
import { BoxMusic } from "./BoxMusic";
import ImgVegas from '../../assets/images/musics/vegas.webp'
import api from '../../services/api'
import { ContainerHome, Content, HeaderCategory, Title, ButtonCategory, FormModal, Boxcategory } from "./styles";
import carregando from '../../assets/images/Loading_icon.gif'
import icon_mais from '../../assets/images/icon_mais.svg'
import Modal from 'react-modal'

export default function Home() {

  useEffect(() => {
    getMusics()
    getCategories()
  }, []);

  const [ loadMusic, setLoadMusic ] = useState(false);
  const [ music, setMusic ] = useState([]);

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

  async function getCategories() {
    setLoadcategories(true)
    await api.get('/categorias/?status=active')
    .then(response => {
      console.log(response?.data?.musicCategorysSearch)
      setLoadcategories(false)
      setCategories(response?.data?.musicCategorysSearch);
    }).catch(error => {
      setLoadcategories(false)
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

  const [ categoryModalOpen, setCategoriesModalOpen ] = useState(false)

  function handleOPenCategoryModalOpen() {
    setCategoriesModalOpen(true)
    getCategoriesModal()
  }

  function handleCloseCategoryModalOpen() {
    setCategoriesModalOpen(false)
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
          </Content>
        </ContainerHome>
      </Layout>
      </>
  )
}
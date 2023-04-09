import React from 'react';
import logoPlay from '../../assets/images/playmuisc.png'
import avatar from '../../assets/images/avatar.png'
import { Container, Content } from './styles'

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logoPlay} alt="play music"/>
        <h1 className='playmusics'>PLAY MUSICS</h1>  
        <form>
          <input
          name="name"
          value=""
          onChange={()=>{}}
          autoComplete="off"
          placeholder="Busque sua música, por nome, categoria..."
          />
        </form>
        <div className='ButtonsCategorys'>
          <button>
            Inscritos
          </button>
          <button>
            Músicas
          </button>
          <button>
            Categorias
          </button>
        </div>
        <img className='avatar' src={avatar} alt="play music"/>
        
      </Content>
    </Container>
  )
}
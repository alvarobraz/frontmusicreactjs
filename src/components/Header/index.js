import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import logoPlay from '../../assets/images/playmuisc.png'
import avatar from '../../assets/images/sign-out.png'
import { Container, Content } from './styles'
import { decodeToken } from '../../services/auth'

export default function Header({
  nameFilter, onUserInputChange
}) {

  const { user } = decodeToken();

  async function logout() {
    localStorage.clear();
    setTimeout(function(){window.location.href = '/';}, 0);
  };

  

  return (
    <Container>
      <Content>
        <img src={logoPlay} alt="play music"/>
        <h1 className='playmusics'>PLAY MUSICS</h1>  
        <form>
          <input
          name="name"
          value={nameFilter && nameFilter !== undefined ? nameFilter : ''}
          onChange={onUserInputChange}
          autoComplete="off"
          placeholder="Busque sua música, por nome, categoria..."
          />
        </form>
        <div className='ButtonsCategorys'>
         {user.role === 'user' || user.role === 'admin' ? 
          <>
          <NavLink to="/home">
          Músicas
          </NavLink>
          </>
         : ''}
          
        </div>
        <img onClick={()=>logout()} className='logout' src={avatar} alt="play music"/>
        
      </Content>
    </Container>
  )
}
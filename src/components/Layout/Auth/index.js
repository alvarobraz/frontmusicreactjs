import React, { useState } from 'react';
import { Container, Content } from "./styles";
import api from '../../../services/api'
// import logoPlay from '../../assets/images/playmuisc.png'
// import { Home } from '../../Home/styles'

export default function Auth() {

  const [ toReveal, setToReveal ] = useState(false);
  const [ loadRegister, setLoadRegister ] = useState(false);
  const [ loadName, setLoadName ] = useState(false);
  const [ loadEmail, setLoadEmail ] = useState(false);
  const [ loadPassword, setLoadPassword ] = useState(false);
  const [ loadConfirmPassword, setLoadConfirmPassword ] = useState(false);
  
  const [ user, setUser ] = useState([]);

  function Reveal() {
    setUser({})
    setToReveal(!toReveal)
  }

  async function myChangeHandlerToUser(event) {
    let nam      = event.target.name;
    let val      = event.target.value;

    if(nam === 'name') {
      if(val.length !== 0) {
        setLoadName(false)
        setUser({ ...user, [nam]: val })
      }
      else {
        setLoadName(true)
        setUser({ ...user, [nam]: val })
      }
    }
    if(nam === 'email') {
      if(val.length !== 0) {
        setLoadEmail(false)
        setUser({ ...user, [nam]: val })
      }
      else {
        setLoadEmail(true)
        setUser({ ...user, [nam]: val })
      }
    }
    if(nam === 'password') {
      if(val.length !== 0) {
        setLoadPassword(false)
        setUser({ ...user, [nam]: val })
      }
      else {
        setLoadPassword(true)
        setUser({ ...user, [nam]: val })
      }
    }
    if(nam === 'confirm_password') {
      if(val.length !== 0) {
        setLoadConfirmPassword(false)
        setUser({ ...user, [nam]: val })
      }
      else {
        setLoadConfirmPassword(true)
        setUser({ ...user, [nam]: val })
      }
    }
  }
  
 

  async function signUp() {
    if(
      user?.name === '' || user?.name === undefined || 
      user?.email === '' || user?.email === undefined ||
      user?.password === '' || user?.password === undefined ||
      user?.confirm_password === '' || user?.confirm_password === undefined
    ) {  
      if(user?.name === '' || user?.name === undefined) {
        setLoadName(true)
      }
      if(user?.email === '' || user?.email === undefined) {
        setLoadEmail(true)
      }
      if(user?.password === '' || user?.password === undefined) {
        setLoadPassword(true)
      }
      if(user?.confirm_password === '' || user?.confirm_password === undefined) {
        setLoadConfirmPassword(true)
     }
     return
    }
    setLoadRegister(true);
    await api.post("/inscritos", user)
     .then(response => {
      setLoadRegister(false);
      alert('cadastrou')
     }).catch(error => {
      setLoadRegister(false);
    });
  }

  function signIn(event) {
    console.log(event)
  }



  return (
    <Container>
      <Content>
        {loadRegister ? '...carregando' :
        <>
        <label for="name"><b>Email</b></label>
        <input 
          type="text" 
          name="name" 
          placeholder="Seu Nome" 
          value={user?.name ? user.name : ''} 
          onChange={myChangeHandlerToUser}
          className={loadName ? "error_input" : ''}
          required 
          />
          <label for="email"><b>Email</b></label>
          <input 
            type="text" 
            name="email" 
            placeholder="Seu e-mail" 
            value={user?.email ? user.email : ''} 
            onChange={myChangeHandlerToUser}
            className={loadName ? "error_input" : ''}
            required 
            />
        <label for="psw"><b>Senha</b></label>
        <input 
          type="password" 
          placeholder="Sua senha" 
          name="password" 
          value={user?.password ? user.password : ''} 
          onChange={myChangeHandlerToUser}
          className={loadPassword ? "error_input" : ''}
          required 
        />
        {toReveal ?
        <>
        <label for="confirm_password"><b>Repita a senha</b></label>
        <input
          type="password" 
          placeholder="Sua senha" 
          name="confirm_password" 
          value={user?.confirm_password ? user.confirm_password : ''} 
          onChange={myChangeHandlerToUser} 
          className={loadConfirmPassword ? "error_input" : ''}
          required 
        /> 
        </>  
         : ''}
        <button onClick={toReveal ? ()=>signUp('Cadastrar') : ()=>signIn('Acessar')}>{toReveal ? 'Cadastrar' : 'Acessar'}</button>
        <div class="container">
          { toReveal ? 
          <button onClick={()=>Reveal()} type="button" className="cancelbtn">Voltar</button> : 
          <button type="button" className="cancelbtn">Cancelar</button> }
          <span className="forgot">Recuperar <a href="/">senha?</a></span>
        </div>
        <div class="container">
          {toReveal ? '': <button onClick={()=>Reveal()} className="recover">Não possui um acesso, então cadastre-se?</button>}
        </div>
        </> 
        }
      </Content>
    </Container>
  )
}
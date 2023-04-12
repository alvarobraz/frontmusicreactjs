import {  createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #eff7f6;
    --backgroundHeader: #1b263b;
    --darkPurple: #1b263b;
    --lightPurple: #415a77;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }
    @media (max-width: 720px) {
      font-size: 87.75%
    }
  }

  body, {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  a {
    text-decoration: none
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    oppacity: 0.6;
    cursor: not-allowed
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    max-height: 500px;
    overflow-y: auto;
    background: #fbfbfb;
    padding: 2rem;
    position: relative;
    border-radius: 0.25rem;
  }

`;
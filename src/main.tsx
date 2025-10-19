import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyled} from "./styles/Global.styled.ts";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/Theme.styled.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
      <GlobalStyled/>
            <App />
      </ThemeProvider>
  </StrictMode>,
)

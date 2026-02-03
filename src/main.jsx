import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Tree } from './components/Tree';
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tree />
  </StrictMode>,
)

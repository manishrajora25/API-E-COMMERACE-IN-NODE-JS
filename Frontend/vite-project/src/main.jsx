import { createRoot } from 'react-dom/client';
import './index.css';
import Main from './Pages/Router'; // Correct path to your Router.jsx

createRoot(document.getElementById('root')).render(
  <Main />
);

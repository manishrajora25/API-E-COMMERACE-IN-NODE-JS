import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { UserContextProvider } from './component/useContext'; // ✅ ensure path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    <UserContextProvider>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </UserContextProvider>
//   </React.StrictMode>
);

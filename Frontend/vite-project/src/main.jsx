// import { createRoot } from 'react-dom/client';
// import './index.css';
// import Main from './Pages/Router'; // Correct path to your Router.jsx

// createRoot(document.getElementById('root')).render(
//   <Main />
// );


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import Main from './Pages/Router';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Main />
//     <App/>
//   </React.StrictMode>
// );






// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx'; 
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(

//     <App />
  
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
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

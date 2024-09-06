// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import React from 'react';

import ReactDOM from 'react-dom';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import './app/layout/styles.css';
import { store, StoreContext } from './app/stores/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes';
// import App from './app'
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>,
  document.getElementById('root') as HTMLElement
);


// ReactDOM.render(
//   <React.StrictMode>
//     <StoreContext.Provider value={store}>
//       <RouterProvider router={router} />
//     </StoreContext.Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
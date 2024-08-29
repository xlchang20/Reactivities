// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
import ReactDOM from 'react-dom'
import App from './app/layout/App'
import './app/layout/styles.css'
import { store, StoreContext } from './app/stores/store';
//import reportWebVitals from './reportWebVitals';


//ReactDOM.render(
  //<React.StrictMode>
      //<StoreContext.Provider value={store}>
        //<App />
      //</StoreContext.Provider>,
  //</React.StrictMode>,
  //document.getElementById('root')!

ReactDOM.render(
  //<React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
);
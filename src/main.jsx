import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import "modern-normalize";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Provider store={store}>
         <App />
       </Provider>
    </BrowserRouter>
  </StrictMode>
)

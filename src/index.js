import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import SortPage from './pages/SortPage';
import SearchPage from './pages/SearchPage';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/sort' element={<SortPage />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
      </Routes>
    </HashRouter>
  </Provider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

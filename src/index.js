import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Dashboard from './pages/dashboard/dashboard.page';

const store = createStore(
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard/:userId" element={<Dashboard />} />
    </Routes>
  </Provider>
</BrowserRouter>
);

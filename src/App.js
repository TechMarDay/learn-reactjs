// import './App.css';
import React, { useEffect } from 'react';
import {  NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album'
import productApi from './api/productApi';
import CounterFeature from './features/Counter';
import NotFound from './components/NotFound';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      Header
      <p><NavLink to="/todolist" activeClassName="active-menu">Todos</NavLink></p>
      <p><NavLink to="/albums">Albums</NavLink></p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        {/* <Route path="/" component={TodoFeature} exact /> */}
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todolist" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div >
  );
}

export default App;

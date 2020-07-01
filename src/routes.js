import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/react-rocketshoes/" exact component={Home} />
      <Route path="/react-rocketshoes/cart/" component={Cart} />
    </Switch>
  );
}

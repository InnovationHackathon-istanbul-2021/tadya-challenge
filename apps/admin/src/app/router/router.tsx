import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Welcome } from '../pages';
import { CreateCategory } from '../pages/categories/create';
import { ListCategories } from '../pages/categories/list';
import { GiveFeedback } from '../pages/feedback';
import Login from '../pages/login/login';
import { CreateOffers } from '../pages/offers/create';
import { ListOffers } from '../pages/offers/list';
import Order from '../pages/order/order';
import { CreateProducer } from '../pages/producers/create';
import { ListProducers } from '../pages/producers/list';
import { CreateProduct } from '../pages/products/create';
import { ListProducts } from '../pages/products/list';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/login'} element={<Login/>} />
      <Route path={'/order'} element={<Order/>} />
      <Route path={'/feedback'} element={<GiveFeedback/>} />

      <Route path={'/producers'} element={<ListProducers/>} />
      <Route  path={'/producers/*'}>
        <Route path={'create'} element={<CreateProducer />} />
      </Route>
      <Route path={'/products'} element={<ListProducts />} />
      <Route path={'/products/*'}>
        <Route path={'create'} element={<CreateProduct/>} />
      </Route>
      <Route path={'/categories'} element={<ListCategories />} />
      <Route path={'/categories/*'}>
        <Route path={'create'} element={<CreateCategory/>} />
      </Route>
      <Route path={'/feedback-forms'}>
        <Route path={'create'} element={<>Create Feedback Forms</>} />
        <Route path={'*'} element={<>Manage Feedback Forms</>} />
      </Route>
      <Route path={'/feedback'}>
        <Route path={'create'} element={<>Create Feedback</>} />
        <Route path={'*'} element={<>Manage Feedback</>} />
      </Route>
      <Route path={'/order'}>
        <Route path={'create'} element={<>Create order</>} />
        <Route path={'*'} element={<>Manage order</>} />
      </Route>
      <Route path={'/offers'} element={<ListOffers />} />
      <Route path={'/offers/*'}>
        <Route path={'create'} element={<CreateOffers/>} />
      </Route>
      <Route path={'*'} element={<Welcome />} />
    </Routes>
  );
};

export default AppRouter;

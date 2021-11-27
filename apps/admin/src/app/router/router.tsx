import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Welcome } from '../pages';
import { CreateOffers } from '../pages/offers/create';
import { CreateProducer } from '../pages/producers/create';
import { ListProducers } from '../pages/producers/list';
import { CreateProduct } from '../pages/products/create';
import { ListProducts } from '../pages/products/list';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/producers'} element={<ListProducers/>} />
      <Route  path={'/producers/*'}>
        <Route path={'create'} element={<CreateProducer />} />
      </Route>
      <Route path={'/products'} element={<ListProducts />} />
      <Route path={'/products/*'}>
        <Route path={'create'} element={<CreateProduct/>} />
      </Route>
      <Route path={'/categories'}>
        <Route path={'create'} element={<>Create Categories</>} />
        <Route path={'*'} element={<>Manage Categories</>} />
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
      <Route path={'/offers'}>
        <Route path={'create'} element={<CreateOffers/>} />
        <Route path={'*'} element={<>Manage offers</>} />
      </Route>
      <Route path={'*'} element={<Welcome />} />
    </Routes>
  );
};

export default AppRouter;

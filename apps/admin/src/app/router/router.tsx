import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Welcome } from '../pages';
import { Admin } from '../pages/admin/admin';
import { CreateCategory } from '../pages/categories/create';
import { ListCategories } from '../pages/categories/list';
import { Customer } from '../pages/customer/customer';
import { GiveFeedback } from '../pages/feedback';
import Login from '../pages/login/login';
import { CreateOffers } from '../pages/offers/create';
import { ListOffers } from '../pages/offers/list';
import { OfferProductList } from '../pages/offers/offerProductList';
import Order from '../pages/order/order';
import { CreateProducer } from '../pages/producers/create';
import { ListProducers } from '../pages/producers/list';
import { Producer } from '../pages/producers/producer';
import { CreateProduct } from '../pages/products/create';
import { ListProducts } from '../pages/products/list';
import { Volunteer } from '../pages/volunteer/volunteer';
import { PublicPage } from '../pages/public';
import { ListOrders } from '../pages/order/list';
import { SidebarNavigation } from '../components/sidebar/navigation';
import { ListFeedback } from '../pages/feedback/list';
import { PublicOfferPage } from '../pages/public/offer';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/login'} element={<Login/>} />
      <Route path={'/order'} element={<Order/>} />
      <Route path={'/admin'} element={<Admin/>} />
      <Route path={'/producer'} element={<Producer/>} />
      <Route path={'/customer'} element={<Customer/>} />
      <Route path={'/volunteer'} element={<Volunteer/>} />
      <Route path={'/feedback'} element={<GiveFeedback/>} />
      <Route path={'/public/offer'} element={<PublicOfferPage/>} />
      <Route path={'/public'} element={<PublicPage/>} />

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
      <Route path={'/feedbacks-forms'} element={<ListFeedback />} />
      <Route path={'/feedbacks-forms/*'}>
        <Route path={'create'} element={<>Create Feedback</>} />
      </Route>
      <Route path={'/feedbacks'} element={<ListFeedback />} />
      <Route path={'/feedbacks/*'}>
        <Route path={'create'} element={<>Create order</>} />
      </Route>
      <Route path={'/orders'} element={<ListOrders />} />
      <Route path={'/orders/*'}>
        <Route path={'create'} element={<>Create order</>} />
      </Route>
      <Route path={'/offers'} element={<ListOffers />} />
      <Route path={'/offers/*'}>
        <Route path={':id'} element={<OfferProductList/>} />
        <Route path={'create'} element={<CreateOffers/>} />
      </Route>
      <Route path={'*'} element={<SidebarNavigation />} />
    </Routes>
  );
};

export default AppRouter;

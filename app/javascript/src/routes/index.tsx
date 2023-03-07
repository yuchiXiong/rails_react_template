import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Api from '../services';

const HomePage = lazy(() => import(/* webpackChunkName: "home" */'../pages/home'));
const ErrorPage = lazy(() => import(/* webpackChunkName: "error-page" */'../pages/error-page'));

const routes: RouteObject[] = [{
  path: '/',
  element: <HomePage />,
  loader: async () => {
    const { data } = await Api.getPosts();
    return data;
  }
}];

routes.forEach(route => route.errorElement = <ErrorPage />);

export default routes;

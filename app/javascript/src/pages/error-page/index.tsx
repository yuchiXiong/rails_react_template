import React from 'react';
import NotFoundPage from './404';
import WrongPage from './500';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  console.log(error);

  const isNotFound: boolean = error?.response?.status === 404;

  return isNotFound ? <NotFoundPage /> : <WrongPage />;
};


export default ErrorPage;

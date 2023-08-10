/* eslint-disable react-refresh/only-export-components */

import { lazy } from 'react';
import { createHashRouter, Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from './routes';

const Characters = lazy(() => import('components/Characters/Characters'));
const CharacterDetails = lazy(() => import('components/CharacterDetails/CharacterDetails'));
const NotFound = lazy(() => import('components/NotFound/NotFound'));

export const router = createHashRouter([
  {
    path: ROUTES.ROOT,
    element: <Outlet />,
    errorElement: <Navigate to={ROUTES.NOT_FOUND} replace />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <Navigate to={ROUTES.CHARACTERS} replace />,
      },
      {
        path: ROUTES.CHARACTERS,
        element: <Characters />,
      },
      {
        path: ROUTES.CHARACTER_DETAILS,
        element: <CharacterDetails />,
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFound />,
      },
      {
        path: '*',
        element: <Navigate to={ROUTES.NOT_FOUND} replace />,
      },
    ],
  },
]);

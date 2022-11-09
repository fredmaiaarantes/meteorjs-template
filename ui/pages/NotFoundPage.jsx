import React from 'react';
import { RoutePaths } from '../common/Routes';
import { useHistory } from 'react-router-dom';

export const NotFoundPage = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col items-center">
      <h3 className="px-3 py-2 text-base font-medium">
        Page not found.
      </h3>
      <button onClick={() => history.push(RoutePaths.HOME)} type="button">
        Go Home
      </button>
    </div>
  );
};

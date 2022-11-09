import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useHistory, Link } from 'react-router-dom';
import { Passwordless } from 'meteor/quave:accounts-passwordless-react';
import { RoutePaths } from '../common/Routes';
import { useTracker } from 'meteor/react-meteor-data';

// classnames tailwind passwordless:
// appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-sm font-medium text-gray-700 mt-0 flex justify-end text-indigo-600 hover:text-indigo-500 cursor-pointer justify-center px-4 border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 bg-red-50 bg-green-50 p-4 text-red-800 text-green-800 ml-auto pl-3 -mx-1.5 -my-1.5 inline-flex p-1.5 text-red-500 text-green-500 hover:bg-red-100 bg-green-100 focus:ring-offset-red-50 ring-offset-green-50 focus:ring-red-600 ring-green-600 sr-only mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 shadow sm:rounded-lg sm:px-10 space-y-6 mt-1

export const AuthPage = () => {
  const userId = useTracker(() => Meteor.userId());
  const history = useHistory();

  const onEnterToken = () => {
    history.push(RoutePaths.HOME);
  };

  if (userId) {
    return (
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 pb-10 pt-10">
        <div className="flex flex-col items-center">
          <h3 className="px-3 py-2 text-xl text-white font-medium">
            You are already logged in.
          </h3>
          <Link
            to={RoutePaths.HOME}
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-indigo-700">
      <div className="flex flex-grow flex-col items-center">
        <Passwordless onEnterToken={onEnterToken} />
        <Link
          to={RoutePaths.HOME}
          className="mt-5 mb-10 cursor-pointer text-base font-medium text-white hover:text-gray-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

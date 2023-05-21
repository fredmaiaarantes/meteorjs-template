import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {RoutePaths} from "/ui/common/Routes";
import {useTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";

export const LoggedUserOnly = ({ children }) => {
  const userId = useTracker(() => Meteor.userId());
  const location = useLocation();

  if (!userId) {
    return <Navigate to={RoutePaths.AUTH} state={{ from: location }} />
  }
  return children;
};

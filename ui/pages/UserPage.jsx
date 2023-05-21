import React from "react";
import {useTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";

export const UserPage = () => {
  const user = useTracker(() => Meteor.user());

  if(!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-4xl py-8 px-4 sm:py-12">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">User Details</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details about the logged user</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">User Id</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user._id}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email Address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.emails[0].address}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

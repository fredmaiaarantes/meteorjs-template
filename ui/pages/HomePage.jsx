import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

const LoggedInMessage = () => {
  const userId = useTracker(() => Meteor.userId());
  if(!userId) return null;

  return (
    <div className="mt-5">
      <span className="inline-flex items-center rounded-full bg-yellow-300 px-2.5 py-0.5 text-xs font-medium text-gray-800">
        You can see this message only if you are logged in.
      </span>
    </div>
  )
}

export const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-indigo-700">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          <span className="block">Boost your productivity.</span>
          <span className="block">Start using <span className="text-white">MeteorJS</span> and <span className="text-white">Meteor Cloud</span> today.</span>
        </h2>
        <p className="mt-4 text-xl leading-8 text-indigo-200">
          Starter template built with MeteorJS + React with SSR + Tailwind.
          Authentication with Passwordless is ready to use, try Signing In.
        </p>
        <LoggedInMessage />
        <a
          target="_blank"
          href="https://github.com/fredmaiaarantes/meteorjs-template"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
        >
          Clone this template
        </a>
        <a
          target="_blank"
          href="https://university.meteor.com"
          className="mt-8 md:ml-2 inline-flex w-full items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium text-white border-solid border-white hover:bg-indigo-600 sm:w-auto"
        >
          Learn MeteorJS
        </a>
      </div>
    </div>
  );
};

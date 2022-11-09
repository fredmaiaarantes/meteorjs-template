import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { RoutePaths } from './Routes';

const navigation = [
    { name: 'Install', href: 'https://www.meteor.com/developers/install' },
    { name: 'Tutorials', href: 'https://www.meteor.com/developers/tutorials' },
    { name: 'Docs', href: 'https://docs.meteor.com/#/full/' },
    { name: 'Meteor Cloud', href: 'https://www.meteor.com/cloud' },
]

export const Menu = () => {
    const userId = useTracker(() => Meteor.userId());
    return (
        <header className="bg-indigo-900">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                <div className="flex items-center">
                    <a href="/">
                    <span className="sr-only">MeteorJS</span>
                        <img className="h-10 w-10" src="/images/meteor-logo-sm.png" alt="MeteorJS Logo" />
                    </a>
                    <div className="ml-10 hidden space-x-8 lg:block">
                    {navigation.map((link) => (
                        <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                        {link.name}
                        </a>
                    ))}
                    </div>
                </div>
                <div className="ml-10 space-x-4">
                {userId ? (
                    <button
                        onClick={() => Meteor.logout()}
                        className="cursor-pointer text-base font-medium text-gray-200 hover:text-gray-100"
                    >
                        Log out
                        <span aria-hidden="true"> &larr;</span>
                    </button>
                    ) : (
                    <Link to={RoutePaths.AUTH}
                        className="cursor-pointer inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                    >
                        Sign In
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                    )}
                </div>
                </div>
                <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
                {navigation.map((link) => (
                    <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                    </a>
                ))}
                </div>
            </nav>
        </header>
    )
}

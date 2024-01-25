// import Container from 'components/Container';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';

import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
} from '@heroicons/react/outline'

import { ChevronDownIcon } from '@heroicons/react/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const menus = [
    // { id: 1, link: 'https://paperr.site#features', target: '_self', rel: 'norefferer', name: 'Features', submenu: [] },
    // { id: 2, link: '/pricing', target: '_self', rel: 'norefferer', name: 'Pricing', submenu: [] },
    // { id: 3, link: '/blogs', target: '_self', rel: 'norefferer', name: 'Blogs', submenu: [] }
]


export default function Navbar() {

    const [menu, setMenu] = useState(menus)

    const router = useRouter()

    const menuLinks = menu.map((menuItem) => {
        if (menuItem.submenu.length == 0) {
            return (
                <a
                    key={menuItem.id}
                    href={`${menuItem.link}`}
                    target={menuItem.target}
                    rel={menuItem.rel}
                    className="focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 main-menu-links hover:bg-gray-100 p-2 rounded-md outline-2 text-lg font-semibold text-slate-600 sm:text-base"
                >
                    {menuItem.name}
                </a>
            );
        } else {
            return (
                <Popover className="relative focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 main-menu-links hover:bg-gray-100 p-2 rounded-md outline-2 text-lg font-semibold text-slate-600 sm:text-base">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open ? 'text-gray-900' : 'text-gray-500',
                                    'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 '
                                )}
                            >
                                <span className='focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 main-menu-links hover:bg-gray-100  rounded-md outline-2 text-lg font-semibold text-slate-600 sm:text-base'>{menuItem.name}</span>
                                <ChevronDownIcon
                                    className={classNames(
                                        open ? 'text-gray-600' : 'text-gray-400',
                                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                                    )}
                                    aria-hidden="true"
                                />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-xs lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative bg-white p-2">
                                            {menuItem.submenu.map((item) => (
                                                <a
                                                    key={item.id}
                                                    href={`https://${item.clink}/`}
                                                    target={item.ctarget}
                                                    rel={item.crel}
                                                    className="p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                >
                                                    <div className="ml-4">
                                                        <p className="text-base font-medium text-gray-900">{item.cname}</p>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            )
        }
    });

    return (
        <div className="fixed z-10 w-full bg-white border-b top-0 px-10">
            {/* <Container> */}
            <header>
                <Popover className="relative bg-white	">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/" className='flex items-center'>
                                <img
                                    className=""
                                    src='/paperr-logo.svg'
                                    alt="Paperr Logo"
                                    width={130}
                                    height={10}
                                />
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            {/* Duplicate button is commented down */}

                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:ou tline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                            </Popover.Button>
                        </div>


                        <Popover.Group as="nav" className="hidden md:flex md:ml-5 space-x-10">

                            {menuLinks}

                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link href="/start"><button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2disabled:opacity-50 disabled:pointer-events-none  bg-slate-800 text-white hover:bg-slate-900  rounded-md px-6 py-3">
                                Report Scam
                            </button></Link>
                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className=" mt-20 absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">

                                <div className="py-4 px-5">

                                    <Popover.Group as="nav" className="flex flex-col">
                                        {menuLinks}
                                    </Popover.Group>

                                    <div className="p-2 w-full">
                                        <a
                                            href="/auth/register"
                                            className="w-full inline-flex items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none bg-slate-800 text-white hover:bg-slate-900 rounded-md px-6 py-3"
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>

            {/* </Container> */}
        </div>
    );
}

/* <Popover.Button className="hidden bg-white rounded-md p-2 items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button> */
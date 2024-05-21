import { useState } from 'react'

import {
  HomeModernIcon,
  ChartPieIcon,
  BellAlertIcon,
  ChatBubbleLeftIcon,
  ClipboardDocumentIcon,
  UsersIcon,
  EnvelopeIcon,
  PowerIcon,
  CursorArrowRippleIcon,
  FaceFrownIcon,
  CogIcon,
} from '@heroicons/react/20/solid'

function Sidebares() {
  const menu1 = [
    {
      name: 'Dashboard',
      icon: <HomeModernIcon width={18} className="text-blue-500" />,
      isActive: true,
    },
    {
      name: 'Analytics',
      isActive: false,
      icon: <ChartPieIcon width={18} className="text-gray-600" />,
    },
    {
      name: 'Notification',
      isActive: false,
      icon: <BellAlertIcon width={18} className="text-gray-600" />,
    },
  ]

  const menu2 = [
    {
      name: 'Chat',
      icon: <ChatBubbleLeftIcon width={18} className="text-gray-600 " />,
      isActive: false,
    },
    {
      name: 'Notes',
      isActive: false,
      icon: <ClipboardDocumentIcon width={18} className="text-gray-600" />,
    },
    {
      name: 'Customers',
      isActive: false,
      icon: <UsersIcon width={18} className="text-gray-600" />,
    },
    {
      name: 'Mail',
      isActive: false,
      icon: <EnvelopeIcon width={18} className="text-gray-600" />,
    },
  ]

  const menu3 = [
    {
      name: 'Login',
      icon: <PowerIcon width={18} className="text-gray-600" />,
      isActive: false,
    },
    {
      name: 'Register',
      isActive: false,
      icon: <CursorArrowRippleIcon width={18} className="text-gray-600" />,
    },
    {
      name: 'Error',
      isActive: false,
      icon: <FaceFrownIcon width={18} className="text-gray-600" />,
    },
  ]

  return (
    <div className="App ">
      <section className="w-20 sm:w-64 bg-white  h-screen">
        <div className="border-b p-5 text-center sm:text-left">
          <span className="hidden sm:block">Dashboard UI</span>
          <span className="sm:hidden">DUI</span>
        </div>
        <div className=" border-b text-sm">
          <Menus menu={menu1} title={{ sm: 'BUSINESS', xs: 'BUSINESS' }} />
        </div>
        <div className="border-b text-sm">
          <Menus menu={menu2} title={{ sm: 'APPLICATION', xs: 'APP' }} />
        </div>
        <div className="border-b text-sm">
          <Menus menu={menu3} title={{ sm: 'AUTHENTICATION', xs: 'AUTH' }} />
        </div>

      </section>
    </div>
  )
}

function Menus({ menu, title }) {
  return (
    <div className="py-5">
      <h6 className="mb-4 text-[10px] sm:text-sm text-center sm:text-left sm:px-5 ">
        <span className="sm:hidden">{title.xs}</span>
        <span className="hidden sm:block">{title.sm}</span>
      </h6>
      <ul>
        {menu.map((val, index) => {
          const menuActive = val.isActive
            ? 'bg-blue-300 bg-opacity-10 px-3 border border-blue-100 py-2 rounded-md text-blue-400 flex'
            : 'px-3 py-2 flex'

          const textActive = val.isActive ? 'text-blue-500' : 'text-gray-700'

          return (
            <li key={index} className={`${menuActive} cursor-pointer mx-5`}>
              {val.icon}
              <div className={`ml-2 ${textActive} hidden sm:block`}>
                {val.name}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebares
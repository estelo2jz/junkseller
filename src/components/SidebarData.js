import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",

  },
  {
    title: "Electronics",
    path: "/electronics",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",

  },
  {
    title: "Computers",
    path: "/computers",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",

  },
];
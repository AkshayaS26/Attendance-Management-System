import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as mdicons from "react-icons/md";
import * as tbicons from "react-icons/tb";
import * as hi2icon from "react-icons/hi2";
import * as tiicons from "react-icons/ti";
import * as Siicons from "react-icons/si";
import * as Bsicons from "react-icons/bs";
import * as Piicons from "react-icons/pi";
import mm from '../mm.jpg';

export const SidebarData = [
    {
        title: "Dash Board",
        path: "/DashBoard",
        icon: <RiIcons.RiDashboardFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: "Masters",
        icon: <FaIcons.FaWpforms />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Designation Master",
                path: "/masters/designationmaster",
                icon: <tiicons.TiChevronRight />,
            },
            {
                title: "Employee Master",
                path: "/masters/employeemaster",
                icon: <tiicons.TiChevronRight />,
            },
            {
                title: "Holiday Master",
                path: "/masters/holidaymaster",
                icon: <tiicons.TiChevronRight />,
            },
        ],
    },
    {
        title: "PageAccess",
        icon: <Siicons.SiPowerpages />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Page Access",
                path: "/pageaccess/pageaccess",
                icon: <tiicons.TiChevronRight />,
            },
            {
                title: "User Register",
                path: "/pageaccess/userregister",
                icon: <tiicons.TiChevronRight />,
            },
        ],
    },
    {
        title: "Reports",
        icon: <tbicons.TbReport />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Log Report",
                path: "/reports/logreport",
                icon: <tiicons.TiChevronRight />,
            },
            {
                title: "Attendance Report",
                path: "/reports/AttendanceReport",
                icon: <tiicons.TiChevronRight />,
            },
            {
                title: "Monthly Report",
                path: "/reports/monthlyreport",
                icon: <tiicons.TiChevronRight />,
            },
        ],
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <Bsicons.BsFileEarmarkPersonFill />,
    },
    {
        title: "ChangePassword",
        path: "/changepassword",
        icon: <mdicons.MdLockReset />,
    },
    // {
    //     title: "Logout",
    //     path: "/logout",
    //     icon: <tbicons.TbLogout2 />,
    // },
];

import React from "react";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { Badge } from "antd";
import { BsBox, BsBoxSeam } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import Dashboard from "../../../public/assets/icons/dashboard.svg";
import Shipping from "../../../public/assets/icons/Shipping.svg";

import SvgFile from "@/components/SvgFile";
import Link from "next/link";
import style from "./index.module.scss";

export type CustomMenu = { label: string; href: string };

const CustomMenyItem: React.FC<CustomMenu> = ({ label, href }) => {
  return (
    <Link className={style.notifWrap} href={href}>
      <span className={style.settingNotif}>{label}</span>
      <span>
        <Badge count="New" style={{ backgroundColor: "#51A6E3" }} />
      </span>
    </Link>
  );
};

export type navigationProp = {
  name: string;
  icon: React.ReactNode;
  subMenu: navigationProp[];
  href: string;
  customItem?: React.FC<CustomMenu>;
};

export const navigations: navigationProp[] = [
  {
    name: "Dashboard",
    icon: (
      <BsBox
        size={20}
        // fill="currentColor"
        // stroke="currentColor"
        className="list-icons"
      />
    ),
    subMenu: [],
    href: "Dashboard",
  },
  {
    name: "Shipment",
    icon: (
      <BsBoxSeam
        fill="currentColor"
        size={20}
        // stroke="currentColor"
        className="list-icons"
      />
    ),
    subMenu: [],
    href: "Shipping",
  },
  {
    name: "Customers",
    icon: <RiCustomerService2Line size={20} />,
    subMenu: [],
    href: "Customer",
  },
  {
    name: "Rider",
    icon: <SvgFile iconname="Rider" />,
    subMenu: [],
    href: "rider",
  },
  {
    name: "Fleet",
    icon: <SvgFile iconname="Fleet" />,
    subMenu: [],
    href: "fleet",
  },
  {
    name: "Web Design",
    icon: <SvgFile iconname="Web" />,
    subMenu: [],
    href: "web-design",
  },
  {
    name: "Analytics",
    icon: <TbBrandGoogleAnalytics size={20} />,
    subMenu: [],
    href: "analytics",
  },

  {
    name: "Notifications",
    icon: <SvgFile iconname="notif" />,
    subMenu: [],
    href: "notification",
    customItem: CustomMenyItem,
  },
  {
    name: "Settings",
    icon: <AiOutlineSetting size={20} />,
    href: "#",

    subMenu: [
      {
        name: "Billing",
        icon: <TbBrandGoogleAnalytics size={20} />,
        subMenu: [],
        href: "billing",
      },
      {
        name: "Subscription",
        icon: <TbBrandGoogleAnalytics size={20} />,
        subMenu: [],
        href: "subscription",
      },
    ],
  },
];

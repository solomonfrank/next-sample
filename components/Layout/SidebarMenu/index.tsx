import React from "react";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";

import { navigations } from "./constant";
import style from "./index.module.scss";
import { CustomMenu } from "./constant";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

type MenuItenProps = {
  label: string;
  customItem?: React.FC<CustomMenu>;
  href: string;
};
const MenuItemComp: React.FC<MenuItenProps> = ({ label, href, customItem }) => {
  // const navigate = useNavigate();
  const path = href === "#" ? "#" : `/${href}`;
  const CustomCom = customItem;

  if (CustomCom) {
    return <CustomCom href={href} label={label} />;
  }
  return (
    <Link className={style.menuItemLink} href={href}>
      {label}
    </Link>
  );
};

const SidebarMenu = ({ theme = "light" }: { theme: "light" | "dark" }) => {
  const items = navigations.map((item) => {
    const child = item.subMenu.length
      ? item.subMenu.map((item) =>
          getItem(
            <MenuItemComp
              label={item.name}
              href={item.href}
              customItem={item?.customItem}
            />,
            item.href,
            item.icon
          )
        )
      : null;
    return getItem(
      <MenuItemComp
        label={item.name}
        href={item.href}
        customItem={item.customItem}
      />,
      item.href,
      item.icon,
      child || undefined
    );
  });
  return (
    <Menu
      theme={theme}
      defaultSelectedKeys={["dashboard"]}
      mode="inline"
      items={items}
      style={{
        border: "none",
      }}
    />
  );
};

export default SidebarMenu;

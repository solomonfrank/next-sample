import { IoMdMore } from "react-icons/io";
import { Layout, Avatar, Dropdown } from "antd";
import React, { useState, ReactNode, useEffect } from "react";
import Logo from "../../../public/assets/images/logo.png";
import style from "./index.module.scss";
import SidebarMenu from "@/components/Layout/SidebarMenu";
// import { getProfile } from "api/profile";
import { useRouter } from "next/router";
import Image from "next/image";
// import { globalStorage } from "utils/axios";

export const isLoggedIn = () => {
  const token = localStorage.getItem("access_token");
  const tenantId = localStorage.getItem("tenantId");

  if (!token) return false;

  if (token && tenantId) {
    return true;
  }
  return false;
};

const { Sider } = Layout;

interface IPrivateProps {
  showHeader?: boolean;
  header?: ReactNode;
  children: ReactNode;
}

const PrivateLayout: React.FC<IPrivateProps> = ({
  children,
  showHeader,
  header,
}) => {
  const [profile, setProfile] = useState();
  const [reload] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  //   useEffect(() => {
  //     const fetchProfile = async () => {
  //       const [result] = await resolver(getProfile());

  //       if (result) {
  //         const { data } = result.data;

  //         setProfile(data);
  //         globalStorage.store("profile", data);
  //       }
  //     };

  //     fetchProfile();
  //   }, [reload]);
  const items = [
    {
      key: "1",
      label: <span onClick={() => router.push(`/profile`)}>Profle</span>,
    },
    {
      key: "2",
      label: (
        <span onClick={() => router.push(`/edit-profile`)}>Edit Profile</span>
      ),
    },
  ];

  // useEffect(() => {
  //   if (!isLoggedIn()) {
  //     router.push("/Login");
  //   }
  // }, [router]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        // collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width="30rem"
        style={{
          backgroundColor: "#fff",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          borderRight: ".5px solid #D9D9D9",
        }}
      >
        <div className={style.logoBox}>
          <Image src={Logo} alt="logo" className={style.logo} />
        </div>
        <div className={style.menuContainer}>
          <SidebarMenu theme="light" />
        </div>
        <div className={style.menuContainer}>
          <div className={style.footer}>
            <div className={style.avatarContainer}>
              <Avatar src="/assets/images/avatar.png" />
              <div className={style.userInfo}>
                <h4>solomonfrank73@hotmail.com</h4>
                <p>solomon rock</p>
              </div>
            </div>
            <Dropdown
              menu={{
                items,
              }}
              placement="topLeft"
            >
              <span>
                <IoMdMore size={20} />
              </span>
            </Dropdown>
          </div>
        </div>
      </Sider>
      <Layout
        style={{
          padding: 0,
          marginLeft: 300,
          background: "#FCFCFC",
        }}
      >
        {children}
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;

import PrivateLayout from "@/components/Layout/PrivateLayout";

import { Layout } from "antd";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const { Content } = Layout;

const Dashboard = () => {
  const router = useRouter();

  return (
    <main>
      <Content
        style={{
          padding: "5.6rem 5.6rem",
          minHeight: 280,
          background: "#FCFCFC",
        }}
      >
        Dashboard
      </Content>
    </main>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

export default Dashboard;

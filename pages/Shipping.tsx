import PrivateLayout from "@/components/Layout/PrivateLayout";
import { Layout } from "antd";
import { ReactElement } from "react";

const { Content } = Layout;

const Shipping = () => {
  return (
    <main>
      <Content
        style={{
          padding: "5.6rem 5.6rem",
          minHeight: 280,
          background: "#FCFCFC",
        }}
      >
        Shipping
      </Content>
    </main>
  );
};
Shipping.getLayout = function getLayout(page: ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

type Data = {
  accessToken: string;
  tenantId: string;
};

export default Shipping;

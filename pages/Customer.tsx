import PrivateLayout from "@/components/Layout/PrivateLayout";
import { GetServerSideProps, GetStaticProps } from "next";
import { Layout } from "antd";
import { ReactElement } from "react";

const { Content } = Layout;

const Customer = () => {
  return (
    <main>
      <Content
        style={{
          padding: "5.6rem 5.6rem",
          minHeight: 280,
          background: "#FCFCFC",
        }}
      >
        Customer
      </Content>
    </main>
  );
};
Customer.getLayout = function getLayout(page: ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

type Data = {
  accessToken: string;
  tenantId: string;
};

export async function getStaticProps() {
  const data = {
    accessToken: "525225ffffs",
    tenantId: "262662626",
  };
  return {
    props: data,
  };
}

export default Customer;

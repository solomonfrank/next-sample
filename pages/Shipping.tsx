import PrivateLayout from "@/components/Layout/PrivateLayout";
import { GetServerSideProps } from "next";
import { Layout } from "antd";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const { Content } = Layout;

const Shipping: NextPageWithLayout = () => {
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

// export const getServerSideProps: GetServerSideProps<{ data: Data }> = async ({
//   req,
// }) => {
//   const accessToken = req.cookies["access_token"];
//   const tenantId = req.cookies["tenantId"];

//   if (!accessToken || !tenantId) {
//     return {
//       redirect: {
//         destination: "/Login",
//         permanent: false,
//       },
//     };
//   }

//   const data = {
//     accessToken,
//     tenantId,
//   };

//   return {
//     props: {
//       data,
//     },
//   };
// };

export default Shipping;

import PrivateLayout from "@/components/Layout/PrivateLayout";
import { GetServerSideProps, GetStaticProps } from "next";
import { Layout } from "antd";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const { Content } = Layout;

const Customer: NextPageWithLayout = () => {
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

export async function getStaticProps() {
  const data = {
    accessToken: "525225ffffs",
    tenantId: "262662626",
  };
  return {
    props: data,
  };
}

// export const getStaticProps: GetStaticProps<{ data: Data }> = () => {
//   const data = {
//     accessToken: "525225ffffs",
//     tenantId: "262662626",
//   };
//   return {
//     props: {
//       data,
//     },
//   };
// };

export default Customer;

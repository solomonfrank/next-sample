import PrivateLayout from "@/components/Layout/PrivateLayout";

import { Layout } from "antd";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const { Content } = Layout;

const Dashboard: NextPageWithLayout = () => {
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

export default Dashboard;

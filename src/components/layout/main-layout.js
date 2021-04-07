import React from "react";
import Layout from "./layout";
import Dashboard from "./dashboard/dashborad";

const MainLayout = (props) => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default MainLayout;
